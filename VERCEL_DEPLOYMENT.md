# 🚀 Deploy to Vercel - Step by Step Guide

## 📋 Overview

Deploy your HYRINX Web Services frontend to Vercel (free hosting, fast CDN, automatic deployments).

---

## ✅ Prerequisites

- ✅ GitHub repository (Already done!)
- ✅ Vercel account (free)

---

## 🚀 Step-by-Step Deployment

### Step 1: Create Vercel Account

1. Go to: **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub

---

### Step 2: Import Your Project

1. After signing in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find **"Hyrinx-web-services"**
4. Click **"Import"**

---

### Step 3: Configure Project

Vercel will auto-detect your project, but verify these settings:

**Framework Preset:** `Vite` (should auto-detect)

**Root Directory:** `.` (leave as root)

**Build Command:** 
```
npm run build
```

**Output Directory:** 
```
dist
```

**Install Command:**
```
npm install
```

---

### Step 4: Environment Variables

Click **"Environment Variables"** and add:

**Variable Name:** `VITE_API_URL`

**Value:** 
- For now (before backend is deployed): `http://localhost:5000/api`
- After backend deployment: `https://your-backend-url.onrender.com/api`

**Environment:** Select all (Production, Preview, Development)

Click **"Add"**

---

### Step 5: Deploy

1. Click **"Deploy"** button
2. Wait for build to complete (2-3 minutes)
3. Your site will be live!

---

## 🌐 After Deployment

### Your Site Will Be Live At:
- **Production URL:** `https://hyrinx-web-services.vercel.app` (or custom domain)
- **Preview URLs:** Created for each push/PR

---

## 🔄 Automatic Deployments

Vercel automatically deploys:
- ✅ Every push to `main` branch → Production
- ✅ Pull requests → Preview deployments
- ✅ Other branches → Preview deployments

---

## 🔧 Configuration Options

### Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your domain
3. Follow DNS instructions

### Environment Variables (Update Later)

When you deploy your backend:

1. Go to **Project Settings** → **Environment Variables**
2. Update `VITE_API_URL` to your backend URL
3. Redeploy (automatic on next push, or manual)

---

## 📝 Vercel Configuration File (Optional)

You can create `vercel.json` for advanced configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## ✅ Deployment Checklist

- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] Project imported
- [ ] Build settings verified
- [ ] Environment variable `VITE_API_URL` added
- [ ] Deployed successfully
- [ ] Site is live and accessible

---

## 🎯 Next Steps After Vercel Deployment

1. **Test your live site**
2. **Deploy backend** (Render.com, Railway, etc.)
3. **Update `VITE_API_URL`** in Vercel with backend URL
4. **Test form submissions** work with backend

---

## 🔗 Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Project:** Will be at `https://hyrinx-web-services.vercel.app`
- **Documentation:** https://vercel.com/docs

---

## 💡 Tips

- **Free Tier:** Includes 100GB bandwidth/month (plenty for starting)
- **Automatic HTTPS:** Enabled by default
- **Fast CDN:** Global edge network
- **Preview Deployments:** Test before merging to main

---

## 🆘 Troubleshooting

### Build Fails?

**Check:**
1. Build logs in Vercel dashboard
2. Verify `package.json` has build script
3. Check for errors in console

### Environment Variables Not Working?

**Make sure:**
- Variable name starts with `VITE_` (for Vite)
- Added to all environments (Production, Preview, Development)
- Redeploy after adding variables

### Site Not Loading?

**Check:**
- Build completed successfully
- Output directory is `dist`
- No errors in deployment logs

---

**Ready to deploy? Follow the steps above and your site will be live in minutes!** 🚀

