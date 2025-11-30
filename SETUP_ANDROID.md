# 🚀 Android App Setup - Quick Start

## Step-by-Step Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Your Web App
```bash
npm run build
```

### 3. Initialize Capacitor (First Time Only)
```bash
npx cap init "HYRINX Web Services" "com.hyrinx.webservices" --web-dir=dist
```

### 4. Add Android Platform
```bash
npx cap add android
```

### 5. Sync Files
```bash
npx cap sync android
```

### 6. Build APK/AAB

**For Testing:**
```bash
cd android
.\gradlew assembleDebug
```

**For Play Store:**
```bash
cd android
.\gradlew bundleRelease
```

## 📱 What You Get

- ✅ Native Android app
- ✅ All your React code works
- ✅ File uploads work
- ✅ Backend API connected
- ✅ Ready for Play Store

## 🔧 Prerequisites

You need:
1. **Java JDK 17+** - [Download](https://adoptium.net/)
2. **Android SDK** - [Command Line Tools](https://developer.android.com/studio#command-tools)

OR use **GitHub Actions** (no local setup needed) - see `ANDROID_APP_GUIDE.md`

## 📚 Full Documentation

- **Quick Setup**: This file
- **Complete Guide**: `ANDROID_APP_GUIDE.md`
- **Build Setup**: `android-build-setup.md`

## ⚡ Alternative: Build Online (No Setup)

Use GitHub Actions - see `ANDROID_APP_GUIDE.md` for GitHub Actions workflow.

