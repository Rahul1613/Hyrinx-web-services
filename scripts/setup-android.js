#!/usr/bin/env node

/**
 * Setup script for Android app
 * This script initializes Capacitor and sets up Android platform
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

console.log('🚀 Setting up Android app for HYRINX Web Services...\n')

// Step 1: Build the web app
console.log('📦 Step 1: Building web app...')
try {
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir })
  console.log('✅ Web app built successfully!\n')
} catch (error) {
  console.error('❌ Failed to build web app')
  process.exit(1)
}

// Step 2: Initialize Capacitor (if not already done)
console.log('🔧 Step 2: Initializing Capacitor...')
if (!fs.existsSync(path.join(rootDir, 'android'))) {
  try {
    execSync('npx cap init "HYRINX Web Services" "com.hyrinx.webservices" --web-dir=dist', {
      stdio: 'inherit',
      cwd: rootDir
    })
    console.log('✅ Capacitor initialized!\n')
  } catch (error) {
    console.error('❌ Failed to initialize Capacitor')
    process.exit(1)
  }
} else {
  console.log('✅ Capacitor already initialized\n')
}

// Step 3: Add Android platform
console.log('📱 Step 3: Adding Android platform...')
if (!fs.existsSync(path.join(rootDir, 'android'))) {
  try {
    execSync('npx cap add android', { stdio: 'inherit', cwd: rootDir })
    console.log('✅ Android platform added!\n')
  } catch (error) {
    console.error('❌ Failed to add Android platform')
    process.exit(1)
  }
} else {
  console.log('✅ Android platform already exists\n')
}

// Step 4: Sync files
console.log('🔄 Step 4: Syncing files to Android...')
try {
  execSync('npx cap sync android', { stdio: 'inherit', cwd: rootDir })
  console.log('✅ Files synced successfully!\n')
} catch (error) {
  console.error('❌ Failed to sync files')
  process.exit(1)
}

console.log('🎉 Android app setup complete!')
console.log('\n📝 Next steps:')
console.log('1. Navigate to android folder: cd android')
console.log('2. Build APK: .\\gradlew assembleRelease')
console.log('3. Build AAB (for Play Store): .\\gradlew bundleRelease')
console.log('\n📚 See android-build-setup.md for detailed instructions')

