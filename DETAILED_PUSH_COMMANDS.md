# 📋 Detailed Commands to Push to GitHub

## Step-by-Step Instructions

### Step 1: Check Current Status
```bash
git status
```
**What this does:** Shows what files are staged, modified, or untracked.

---

### Step 2: Add Updated .gitignore File
```bash
git add .gitignore
```
**What this does:** Stages the updated .gitignore file that excludes large video files.

**Expected output:** No output (success)

---

### Step 3: Commit the Changes
```bash
git commit -m "Exclude large video files from Android assets - will be synced during build"
```
**What this does:** Creates a commit with the updated .gitignore to exclude large files.

**Expected output:**
```
[main xxxxxxx] Exclude large video files from Android assets - will be synced during build
 1 file changed, 2 insertions(+), 1 deletion(-)
```

---

### Step 4: Verify Remote Repository
```bash
git remote -v
```
**What this does:** Shows your remote repository URL.

**Expected output:**
```
origin  https://github.com/Rahul1613/Hyrinx-web-services.git (fetch)
origin  https://github.com/Rahul1613/Hyrinx-web-services.git (push)
```

---

### Step 5: Check Current Branch
```bash
git branch
```
**What this does:** Shows current branch (should be `main` or `master`).

**Expected output:**
```
* main
```

If you see `master` instead, run:
```bash
git branch -M main
```

---

### Step 6: Push to GitHub
```bash
git push -u origin main
```
**What this does:** Pushes your code to GitHub and sets up tracking.

**If authentication is required, you'll see:**
```
Username for 'https://github.com': 
Password for 'https://Rahul1613@github.com':
```

---

## 🔐 Authentication Steps

### Option A: Personal Access Token (Recommended)

1. **Get Token:**
   - Open browser: https://github.com/settings/tokens
   - Click: "Generate new token" → "Generate new token (classic)"
   - Name: `Hyrinx-Web-Services`
   - Expiration: Choose duration (90 days recommended)
   - Select scopes: Check `repo` (full control of private repositories)
   - Click: "Generate token" at bottom
   - **IMPORTANT:** Copy the token immediately (you won't see it again!)

2. **When prompted during push:**
   ```
   Username for 'https://github.com': Rahul1613
   Password for 'https://Rahul1613@github.com': [paste your token here]
   ```

3. **Expected output after successful push:**
   ```
   Enumerating objects: 120, done.
   Counting objects: 100% (120/120), done.
   Delta compression using up to 16 threads
   Compressing objects: 100% (103/103), done.
   Writing objects: 100% (120/120), done.
   Total 120 (delta 9), reused 0 (delta 0)
   To https://github.com/Rahul1613/Hyrinx-web-services.git
    * [new branch]      main -> main
   Branch 'main' set up to track remote branch 'main' from 'origin'.
   ```

---

### Option B: GitHub CLI (Alternative)

If you have GitHub CLI installed:

```bash
# Authenticate
gh auth login

# Follow prompts:
# - GitHub.com
# - HTTPS
# - Login with web browser
# - Authorize

# Then push
git push -u origin main
```

---

## 🛠️ Troubleshooting Commands

### If Push Fails: Check What's Wrong
```bash
git status
git log --oneline -5
```

### If Large Files Still Cause Issues
```bash
# Remove large files from git history (if needed)
git rm --cached android/app/src/main/assets/public/assets/*.mp4
git commit -m "Remove large video files from tracking"
git push -u origin main
```

### If Authentication Fails
```bash
# Clear cached credentials
git credential-manager-core erase
# Or on Windows:
git credential reject https://github.com

# Try push again
git push -u origin main
```

### If Branch Name Mismatch
```bash
# Check current branch
git branch

# If on master, rename to main
git branch -M main

# Push again
git push -u origin main
```

### If Remote Already Exists with Different URL
```bash
# Check remote
git remote -v

# Remove old remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/Rahul1613/Hyrinx-web-services.git

# Verify
git remote -v

# Push
git push -u origin main
```

---

## ✅ Verification Commands

### After Successful Push

1. **Verify on GitHub:**
   - Open: https://github.com/Rahul1613/Hyrinx-web-services
   - You should see all your files

2. **Verify locally:**
   ```bash
   git log --oneline -3
   ```
   Should show your commits

3. **Check remote tracking:**
   ```bash
   git branch -vv
   ```
   Should show: `* main xxxxxxx [origin/main]`

---

## 📝 Complete Command Sequence (Copy-Paste Ready)

```bash
# 1. Check status
git status

# 2. Add .gitignore
git add .gitignore

# 3. Commit
git commit -m "Exclude large video files from Android assets - will be synced during build"

# 4. Verify remote
git remote -v

# 5. Check branch
git branch

# 6. Push (will prompt for credentials)
git push -u origin main

# When prompted:
# Username: Rahul1613
# Password: [paste your Personal Access Token]
```

---

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `git status` | Check current state |
| `git add .gitignore` | Stage .gitignore file |
| `git commit -m "message"` | Commit changes |
| `git remote -v` | Check remote URL |
| `git branch` | Check current branch |
| `git push -u origin main` | Push to GitHub |
| `git log --oneline -5` | View recent commits |

---

## 🔗 Important Links

- **Get Personal Access Token:** https://github.com/settings/tokens
- **Your Repository:** https://github.com/Rahul1613/Hyrinx-web-services
- **GitHub CLI:** https://cli.github.com/

---

## ⚠️ Important Notes

1. **Large Files:** Video files in `android/app/src/main/assets/public/` are excluded. They'll be synced during `npx cap sync android` when building.

2. **Token Security:** Never share your Personal Access Token. If exposed, revoke it immediately.

3. **First Push:** The `-u` flag sets up tracking so future pushes can use just `git push`.

4. **Authentication:** GitHub no longer accepts passwords. You MUST use a Personal Access Token.

---

**Ready to push?** Run the commands in order, and use your Personal Access Token when prompted!

