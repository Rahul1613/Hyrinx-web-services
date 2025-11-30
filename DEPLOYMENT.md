# Deployment Guide - HYRINX Web Services

Complete guide for deploying both frontend and backend to production.

## 📋 Prerequisites

1. **MongoDB Database**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)
   - Create a cluster
   - Get your connection string

2. **Email Service**
   - Gmail account (or any SMTP service)
   - For Gmail: Generate an [App Password](https://support.google.com/accounts/answer/185833)

3. **Domain** (optional but recommended)
   - For frontend: `yourdomain.com`
   - For backend: `api.yourdomain.com` or `yourdomain.com/api`

## 🚀 Deployment Options

### Option 1: Render.com (Recommended - Free Tier Available)

#### Backend Deployment

1. **Create Account** at [Render.com](https://render.com)

2. **Create New Web Service**
   - Connect your GitHub repository
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: `Node`

3. **Environment Variables** (Add in Render dashboard):
   ```
   PORT=10000
   NODE_ENV=production
   MONGODB_URI=your-mongodb-atlas-connection-string
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@hyrinx.com
   EMAIL_TO=contact@hyrinx.com
   FRONTEND_URL=https://your-frontend-domain.com
   MAX_FILE_SIZE=10485760
   JWT_SECRET=generate-random-secret-key
   SESSION_SECRET=generate-random-secret-key
   ```

4. **Deploy** - Render will automatically deploy

#### Frontend Deployment

1. **Create New Static Site** in Render
   - Connect GitHub repository
   - Root Directory: (leave empty)
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`

2. **Environment Variables**:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

3. **Deploy**

### Option 2: Vercel (Frontend) + Railway (Backend)

#### Backend on Railway

1. Sign up at [Railway](https://railway.app)
2. Create new project from GitHub
3. Add MongoDB service (or use external MongoDB Atlas)
4. Add environment variables (same as Render)
5. Deploy

#### Frontend on Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Import GitHub repository
3. Framework Preset: Vite
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Environment Variables:
   ```
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```
7. Deploy

### Option 3: Netlify (Frontend) + Heroku (Backend)

#### Backend on Heroku

1. Sign up at [Heroku](https://heroku.com)
2. Create new app
3. Connect GitHub repository
4. Add MongoDB Atlas addon or configure external MongoDB
5. Set Config Vars (environment variables)
6. Deploy

#### Frontend on Netlify

1. Sign up at [Netlify](https://netlify.com)
2. Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Environment variables:
   ```
   VITE_API_URL=https://your-backend-url.herokuapp.com/api
   ```

### Option 4: VPS (DigitalOcean, AWS, etc.)

#### Server Setup

1. **Install Node.js** (v18 or higher):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install MongoDB** (or use MongoDB Atlas):
   ```bash
   # Follow MongoDB installation guide for your OS
   ```

3. **Install PM2** (Process Manager):
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone Repository**:
   ```bash
   git clone your-repo-url
   cd website
   ```

5. **Backend Setup**:
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your values
   ```

6. **Start Backend with PM2**:
   ```bash
   pm2 start server.js --name hyrinx-backend
   pm2 save
   pm2 startup
   ```

7. **Frontend Build**:
   ```bash
   cd ..
   npm install
   npm run build
   ```

8. **Setup Nginx**:
   ```bash
   sudo apt install nginx
   ```

9. **Nginx Configuration** (`/etc/nginx/sites-available/hyrinx`):
   ```nginx
   # Frontend
   server {
       listen 80;
       server_name yourdomain.com;
       
       root /path/to/website/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   
   # Backend API
   server {
       listen 80;
       server_name api.yourdomain.com;
       
       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

10. **Enable Site**:
    ```bash
    sudo ln -s /etc/nginx/sites-available/hyrinx /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

11. **Setup SSL with Let's Encrypt**:
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d yourdomain.com -d api.yourdomain.com
    ```

## 🔧 Post-Deployment Checklist

### Backend
- [ ] MongoDB connection working
- [ ] Environment variables set correctly
- [ ] Email service configured and tested
- [ ] File uploads working
- [ ] CORS configured for frontend domain
- [ ] Health check endpoint accessible

### Frontend
- [ ] API URL configured correctly
- [ ] Build successful
- [ ] All routes working
- [ ] Images and videos loading
- [ ] Form submissions working
- [ ] No console errors

### Security
- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Rate limiting active
- [ ] File upload size limits set
- [ ] CORS properly configured

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-Factor Authentication
2. Generate App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use in `.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=generated-app-password
   ```

### Other SMTP Services

- **SendGrid**: Free tier available
- **Mailgun**: Free tier available
- **AWS SES**: Pay-as-you-go

## 🗄️ Database Setup

### MongoDB Atlas

1. Create account
2. Create cluster (free M0 tier)
3. Create database user
4. Whitelist IP (0.0.0.0/0 for all IPs)
5. Get connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/hyrinx_webservices
   ```

## 🔍 Testing Deployment

### Backend Health Check
```bash
curl https://your-backend-url.com/api/health
```

### Test Project Submission
1. Go to contact page
2. Fill out form
3. Submit
4. Check:
   - Database for new entry
   - Email notifications received
   - File uploaded (if provided)

## 📊 Monitoring

### Recommended Tools
- **Uptime Monitoring**: UptimeRobot (free)
- **Error Tracking**: Sentry (free tier)
- **Analytics**: Google Analytics

## 🆘 Troubleshooting

### Backend Issues
- Check logs: `pm2 logs hyrinx-backend`
- Verify environment variables
- Test MongoDB connection
- Check port availability

### Frontend Issues
- Check browser console
- Verify API URL
- Check CORS settings
- Verify build output

### Email Issues
- Verify SMTP credentials
- Check spam folder
- Test with different email service
- Verify firewall/port 587 open

## 📝 Environment Variables Summary

### Backend (.env)
```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=...
EMAIL_PASS=...
EMAIL_FROM=...
EMAIL_TO=...
FRONTEND_URL=https://...
MAX_FILE_SIZE=10485760
JWT_SECRET=...
SESSION_SECRET=...
```

### Frontend (.env)
```
VITE_API_URL=https://api.yourdomain.com/api
```

## 🎉 Success!

Once deployed, your website should be live and fully functional!

