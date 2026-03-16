#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const https = require('https')
const os = require('os')

const REPO = 'mewomewoliu/design-taste-skill'
const BRANCH = 'main'
const DEST_DIR = path.join(os.homedir(), 'Downloads', 'design-studio-skills')

const SKILLS = [
  'design-taste.skill',
  'design-engineer.skill',
  'design-director.skill',
  'brand-director.skill',
  'content-director.skill',
  'design-system-director.skill',
  'motion-designer.skill',
  'product-designer.skill',
]

const BASE_URL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`

// ─── Helpers ────────────────────────────────────────────────────────────────

function log(msg) { process.stdout.write(msg + '\n') }
function step(n, msg) { log(`\n  ${n}. ${msg}`) }
function ok(msg) { log(`     ✓ ${msg}`) }
function info(msg) { log(`     → ${msg}`) }
function hr() { log('\n' + '─'.repeat(60)) }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        file.close()
        fs.unlinkSync(dest)
        download(res.headers.location, dest).then(resolve).catch(reject)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        fs.unlinkSync(dest)
        reject(new Error(`HTTP ${res.statusCode} for ${url}`))
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', (err) => {
      file.close()
      if (fs.existsSync(dest)) fs.unlinkSync(dest)
      reject(err)
    })
  })
}

function openFolder(dir) {
  const platform = process.platform
  try {
    if (platform === 'darwin') execSync(`open "${dir}"`)
    else if (platform === 'win32') execSync(`explorer "${dir}"`)
    else execSync(`xdg-open "${dir}"`)
  } catch (_) {
    // silently fail — not critical
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  hr()
  log('')
  log('  AI Design Studio — Skill Installer')
  log('  Claude Code skill package by @mewomewoliu')
  hr()

  // Step 1: create destination
  step(1, `Creating folder: ${DEST_DIR}`)
  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true })
  }
  ok('Folder ready')

  // Step 2: download
  step(2, `Downloading ${SKILLS.length} skill files from GitHub...`)
  log('')

  const results = []
  for (const skill of SKILLS) {
    const url = `${BASE_URL}/${skill}`
    const dest = path.join(DEST_DIR, skill)
    process.stdout.write(`     Downloading ${skill}...`)
    try {
      await download(url, dest)
      process.stdout.write(' ✓\n')
      results.push({ skill, ok: true })
    } catch (err) {
      process.stdout.write(` ✗ (${err.message})\n`)
      results.push({ skill, ok: false, err: err.message })
    }
  }

  const failed = results.filter(r => !r.ok)
  if (failed.length > 0) {
    log('')
    log(`  ⚠ ${failed.length} file(s) failed to download. Check your internet connection and try again.`)
  }

  // Step 3: open folder
  step(3, 'Opening the folder in Finder...')
  openFolder(DEST_DIR)
  ok(`Folder opened: ${DEST_DIR}`)

  // Step 4: final instructions
  hr()
  log('')
  log('  Last step — install into Claude Code (takes 30 seconds):')
  log('')
  log('  1. Open Claude Code')
  log('  2. Press  Cmd + ,  to open Settings')
  log('  3. Click the  Skills  tab')
  log('  4. Click  Install from file')
  log('  5. Select each .skill file from the folder that just opened')
  log('  6. Repeat for each skill you want')
  log('')
  log('  Recommended starting set:')
  log('    → design-engineer.skill   (design + code, all-in-one)')
  log('    → design-director.skill   (ties the whole studio together)')
  log('    → design-taste.skill      (pure aesthetic layer, optional)')
  log('')
  log('  Or install all 8 for the full AI design studio.')
  hr()
  log('')
}

main().catch(err => {
  log(`\n  Error: ${err.message}`)
  process.exit(1)
})
