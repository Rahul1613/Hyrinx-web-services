# Android App Build Setup - HYRINX Web Services

## 📱 Overview

This guide will help you build the Android app **without Android Studio** using command-line tools.

## ✅ Prerequisites

### 1. Install Java JDK (Required)
- Download JDK 17 or higher from [Oracle](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://adoptium.net/)
- Set JAVA_HOME environment variable
- Verify: `java -version`

### 2. Install Android SDK (Command Line Tools)
- Download [Android Command Line Tools](https://developer.android.com/studio#command-tools)
- Extract to a folder (e.g., `C:\Android\cmdline-tools`)
- Set ANDROID_HOME environment variable
- Add to PATH: `%ANDROID_HOME%\cmdline-tools\latest\bin` and `%ANDROID_HOME%\platform-tools`

### 3. Install Node.js (Already have it)
- Verify: `node -v` and `npm -v`

## 🚀 Setup Steps

### Step 1: Install Capacitor Dependencies
```bash
npm install
```

### Step 2: Build Your Web App
```bash
npm run build
```

### Step 3: Initialize Capacitor (First Time Only)
```bash
npx cap init
```

### Step 4: Add Android Platform
```bash
npx cap add android
```

### Step 5: Sync Files
```bash
npx cap sync android
```

## 🔨 Building the APK/AAB

### Option 1: Using Gradle (Recommended)

1. Navigate to Android folder:
```bash
cd android
```

2. Build Debug APK:
```bash
.\gradlew assembleDebug
```
Output: `android/app/build/outputs/apk/debug/app-debug.apk`

3. Build Release APK:
```bash
.\gradlew assembleRelease
```
Output: `android/app/build/outputs/apk/release/app-release-unsigned.apk`

4. Build Release AAB (for Play Store):
```bash
.\gradlew bundleRelease
```
Output: `android/app/build/outputs/bundle/release/app-release.aab`

### Option 2: Using Online Build Service

If you don't want to install Android SDK, use:
- **EAS Build** (Expo) - Free tier available
- **GitHub Actions** - Free for public repos
- **Bitrise** - Free tier available

## 🔐 Signing the App (For Play Store)

### Generate Keystore
```bash
keytool -genkey -v -keystore hyrinx-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias hyrinx
```

### Configure Signing

Edit `android/app/build.gradle`:
```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file('../../hyrinx-release-key.jks')
            storePassword 'your-keystore-password'
            keyAlias 'hyrinx'
            keyPassword 'your-key-password'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            ...
        }
    }
}
```

## 📦 Play Store Requirements

### 1. App Icons
- Place icons in `android/app/src/main/res/mipmap-*/ic_launcher.png`
- Sizes needed: 48x48, 72x72, 96x96, 144x144, 192x192, 512x512

### 2. App Information
- Package Name: `com.hyrinx.webservices`
- Version Code: Increment in `android/app/build.gradle`
- Version Name: Update in `capacitor.config.ts`

### 3. Permissions
- Already configured in `AndroidManifest.xml`
- Review and adjust as needed

## 🛠️ Alternative: Build Without Local Setup

### Using GitHub Actions (Free)

Create `.github/workflows/android-build.yml`:
```yaml
name: Build Android APK
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - uses: actions/setup-java@v2
      - name: Setup Android SDK
        uses: android-actions/setup-android@v2
      - name: Install dependencies
        run: npm install
      - name: Build web app
        run: npm run build
      - name: Build Android APK
        run: |
          cd android
          ./gradlew assembleRelease
      - name: Upload APK
        uses: actions/upload-artifact@v2
        with:
          name: app-release.apk
          path: android/app/build/outputs/apk/release/app-release.apk
```

## 📝 Quick Commands Reference

```bash
# Build web app
npm run build

# Sync to Android
npx cap sync android

# Build APK
cd android && .\gradlew assembleRelease

# Build AAB (for Play Store)
cd android && .\gradlew bundleRelease
```

## 🆘 Troubleshooting

### Issue: "gradlew not found"
- Make sure you're in the `android` directory
- On Windows, use `.\gradlew` or `gradlew.bat`

### Issue: "SDK not found"
- Set ANDROID_HOME environment variable
- Install required SDK components via `sdkmanager`

### Issue: "Java version error"
- Use JDK 17 or higher
- Set JAVA_HOME environment variable

## 📚 Resources

- [Capacitor Android Docs](https://capacitorjs.com/docs/android)
- [Android Build Guide](https://developer.android.com/studio/build)
- [Play Store Publishing](https://support.google.com/googleplay/android-developer)

