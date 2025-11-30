# 🚀 Complete Commands - From Directory Navigation to Push

## Full Command Sequence

```bash
# Navigate to project directory
cd C:\Users\rahul\Desktop\website

# STEP 1: Check current status
git status

# STEP 2: Add the updated .gitignore file
git add .gitignore

# STEP 3: Commit the changes
git commit -m "Exclude large video files from Android assets - will be synced during build"

# STEP 4: Verify remote repository is correct
git remote -v

# STEP 5: Check current branch
git branch

# STEP 6: Push to GitHub
git push -u origin main
```

## 🔐 Authentication (When Prompted)

When `git push` asks for credentials:

**Username:** `Rahul1613`

**Password:** [Use Personal Access Token]
- Get token from: https://github.com/settings/tokens
- Generate new token (classic)
- Select scope: `repo`
- Copy token and paste as password

---

## 📋 One-Line Copy-Paste Version

```bash
cd C:\Users\rahul\Desktop\website && git status && git add .gitignore && git commit -m "Exclude large video files from Android assets" && git remote -v && git branch && git push -u origin main
```

---

## 🎯 Step-by-Step with Explanations

### 1. Navigate to Project
```bash
cd C:\Users\rahul\Desktop\website
```
**Purpose:** Change to your project directory

---

### 2. Check Git Status
```bash
git status
```
**Purpose:** See what files are staged, modified, or untracked

**Expected Output:**
```
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   .gitignore
```

---

### 3. Add .gitignore File
```bash
git add .gitignore
```
**Purpose:** Stage the updated .gitignore file

**Expected Output:** (No output = success)

---

### 4. Commit Changes
```bash
git commit -m "Exclude large video files from Android assets - will be synced during build"
```
**Purpose:** Create a commit with the changes

**Expected Output:**
```
[main xxxxxxx] Exclude large video files from Android assets - will be synced during build
 1 file changed, 2 insertions(+), 1 deletion(-)
```

---

### 5. Verify Remote Repository
```bash
git remote -v
```
**Purpose:** Confirm the remote URL is correct

**Expected Output:**
```
origin  https://github.com/Rahul1613/Hyrinx-web-services.git (fetch)
origin  https://github.com/Rahul1613/Hyrinx-web-services.git (push)
```

---

### 6. Check Current Branch
```bash
git branch
```
**Purpose:** Verify you're on the correct branch

**Expected Output:**
```
* main
```

If you see `master` instead, run:
```bash
git branch -M main
```

---

### 7. Push to GitHub
```bash
git push -u origin main
```
**Purpose:** Upload your code to GitHub

**When Prompted:**
```
Username for 'https://github.com': Rahul1613
Password for 'https://Rahul1613@github.com': [paste your token]
```

**Expected Output (Success):**
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

## 🔗 Get Personal Access Token

1. Open: https://github.com/settings/tokens
2. Click: "Generate new token" → "Generate new token (classic)"
3. Name: `Hyrinx-Web-Services`
4. Expiration: 90 days (or your preference)
5. Select scope: Check `repo` (full control)
6. Click: "Generate token"
7. **Copy the token immediately** (you won't see it again!)

---

## ✅ Verification After Push

```bash
# Check recent commits
git log --oneline -3

# Check remote tracking
git branch -vv
```

Then visit: https://github.com/Rahul1613/Hyrinx-web-services

You should see all your files!

---

## 🛠️ Troubleshooting

### If Authentication Fails:
```bash
# Clear cached credentials
git credential reject https://github.com

# Try push again
git push -u origin main
```

### If Branch Name is Wrong:
```bash
# Rename branch
git branch -M main

# Push again
git push -u origin main
```

### If Remote URL is Wrong:
```bash
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

**Ready to push!** Copy and paste the commands in order. 🚀

