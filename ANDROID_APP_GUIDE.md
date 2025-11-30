# 📱 Android App Guide - HYRINX Web Services

Complete guide to build and publish your Android app to Google Play Store.

## 🎯 Overview

Your React website has been configured to work as a native Android app using **Capacitor**. This allows you to:
- ✅ Convert your web app to native Android
- ✅ Build APK/AAB files for Play Store
- ✅ No Android Studio required (command-line build)
- ✅ Reuse all your existing React code

## 📋 Prerequisites

### Option 1: Local Build (Recommended)

1. **Java JDK 17+**
   - Download: [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://adoptium.net/)
   - Set `JAVA_HOME` environment variable
   - Verify: `java -version`

2. **Android SDK Command Line Tools**
   - Download: [Android Command Line Tools](https://developer.android.com/studio#command-tools)
   - Extract to: `C:\Android\cmdline-tools` (or your preferred location)
   - Set `ANDROID_HOME` environment variable
   - Add to PATH:
     - `%ANDROID_HOME%\cmdline-tools\latest\bin`
     - `%ANDROID_HOME%\platform-tools`

3. **Install Required SDK Components**
   ```bash
   sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
   ```

### Option 2: Online Build (No Local Setup)

Use GitHub Actions or other CI/CD services (see below).

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build Web App
```bash
npm run build
```

### Step 3: Setup Android (First Time)
```bash
# Initialize Capacitor
npx cap init "HYRINX Web Services" "com.hyrinx.webservices" --web-dir=dist

# Add Android platform
npx cap add android

# Sync files
npx cap sync android
```

### Step 4: Build APK/AAB

**For Testing (Debug APK):**
```bash
cd android
.\gradlew assembleDebug
```
Output: `android/app/build/outputs/apk/debug/app-debug.apk`

**For Play Store (Release AAB):**
```bash
cd android
.\gradlew bundleRelease
```
Output: `android/app/build/outputs/bundle/release/app-release.aab`

## 🔐 Signing Your App (Required for Play Store)

### 1. Generate Keystore
```bash
keytool -genkey -v -keystore hyrinx-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias hyrinx
```

**Important:** Save the keystore file and passwords securely! You'll need them for updates.

### 2. Configure Signing

Create `android/keystore.properties`:
```properties
storePassword=your-keystore-password
keyPassword=your-key-password
keyAlias=hyrinx
storeFile=../../hyrinx-release-key.jks
```

Update `android/app/build.gradle`:
```gradle
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...
    signingConfigs {
        release {
            if (keystorePropertiesFile.exists()) {
                keyAlias keystoreProperties['keyAlias']
                keyPassword keystoreProperties['keyPassword']
                storeFile file(keystoreProperties['storeFile'])
                storePassword keystoreProperties['storePassword']
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

## 📦 Play Store Requirements

### 1. App Icons
Create app icons in these sizes:
- `mipmap-mdpi`: 48x48px
- `mipmap-hdpi`: 72x72px
- `mipmap-xhdpi`: 96x96px
- `mipmap-xxhdpi`: 144x144px
- `mipmap-xxxhdpi`: 192x192px

Place in: `android/app/src/main/res/mipmap-*/ic_launcher.png`

### 2. App Information
- **Package Name**: `com.hyrinx.webservices` (in `capacitor.config.ts`)
- **Version Code**: Increment in `android/app/build.gradle` (versionCode)
- **Version Name**: Update in `capacitor.config.ts` (appName)

### 3. Feature Graphic
- Size: 1024x500px
- Required for Play Store listing

### 4. Screenshots
- Phone: At least 2 screenshots (min 320px, max 3840px)
- Tablet: Optional but recommended

## 🌐 Building Without Local Setup

### Using GitHub Actions (Free)

Create `.github/workflows/android-build.yml`:

```yaml
name: Build Android App

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Setup Java
      uses: actions/setup-java@v3
      with:
        distribution: 'temurin'
        java-version: '17'
    
    - name: Setup Android SDK
      uses: android-actions/setup-android@v2
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build web app
      run: npm run build
    
    - name: Setup Capacitor
      run: |
        npx cap add android || true
        npx cap sync android
    
    - name: Build AAB
      run: |
        cd android
        ./gradlew bundleRelease
    
    - name: Upload AAB
      uses: actions/upload-artifact@v3
      with:
        name: app-release
        path: android/app/build/outputs/bundle/release/app-release.aab
```

## 📝 Publishing to Play Store

### 1. Create Google Play Developer Account
- Cost: $25 one-time fee
- Sign up: [Google Play Console](https://play.google.com/console)

### 2. Create App Listing
- App name: HYRINX Web Services
- Default language: English
- App type: App
- Free or paid: Free

### 3. Upload AAB File
- Go to: Production → Create new release
- Upload: `app-release.aab`
- Add release notes
- Review and publish

### 4. Complete Store Listing
- App description
- Screenshots
- Feature graphic
- Privacy policy URL
- Contact information

## 🔧 Configuration Files

### Capacitor Config
- File: `capacitor.config.ts`
- App ID: `com.hyrinx.webservices`
- App Name: `HYRINX Web Services`

### Android Manifest
- File: `android/app/src/main/AndroidManifest.xml`
- Permissions: Internet, Storage, Camera (for file uploads)

### Build Gradle
- File: `android/app/build.gradle`
- Min SDK: 22 (Android 5.1+)
- Target SDK: 34 (Android 14)

## 🛠️ Useful Commands

```bash
# Build web app
npm run build

# Sync to Android
npx cap sync android

# Open in Android Studio (if installed)
npx cap open android

# Build debug APK
cd android && .\gradlew assembleDebug

# Build release APK
cd android && .\gradlew assembleRelease

# Build release AAB (for Play Store)
cd android && .\gradlew bundleRelease

# Clean build
cd android && .\gradlew clean
```

## 🐛 Troubleshooting

### "gradlew not found"
- Make sure you're in the `android` directory
- On Windows, use `.\gradlew` or `gradlew.bat`

### "SDK not found"
- Set `ANDROID_HOME` environment variable
- Install SDK components: `sdkmanager "platform-tools" "platforms;android-34"`

### "Java version error"
- Use JDK 17 or higher
- Set `JAVA_HOME` environment variable

### "Build failed"
- Clean build: `cd android && .\gradlew clean`
- Rebuild: `cd android && .\gradlew assembleRelease`

## 📚 Resources

- [Capacitor Android Docs](https://capacitorjs.com/docs/android)
- [Android Build Guide](https://developer.android.com/studio/build)
- [Play Store Publishing](https://support.google.com/googleplay/android-developer/answer/9859152)
- [App Signing Guide](https://developer.android.com/studio/publish/app-signing)

## ✅ Checklist Before Publishing

- [ ] App icons created (all sizes)
- [ ] App signed with release keystore
- [ ] Version code incremented
- [ ] Version name updated
- [ ] AAB file built successfully
- [ ] Tested on real device
- [ ] Privacy policy URL ready
- [ ] Store listing completed
- [ ] Screenshots prepared
- [ ] Feature graphic created

## 🎉 Success!

Once published, your Android app will be available on Google Play Store!

---

**Need Help?** Check `android-build-setup.md` for detailed setup instructions.

