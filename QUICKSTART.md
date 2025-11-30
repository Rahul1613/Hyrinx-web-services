# Quick Start Guide - HYRINX Web Services

Get your website up and running in minutes!

## ⚡ Quick Setup

### 1. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

### 2. Setup MongoDB

**Option A: MongoDB Atlas (Recommended - Free)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create a cluster (free M0 tier)
4. Create database user
5. Whitelist IP: `0.0.0.0/0` (for all IPs)
6. Get connection string

**Option B: Local MongoDB**
```bash
# Install MongoDB locally
# Then use: mongodb://localhost:27017/hyrinx_webservices
```

### 3. Configure Backend

1. Copy environment file:
```bash
cd server
cp .env.example .env
```

2. Edit `server/.env`:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your-mongodb-connection-string
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=noreply@hyrinx.com
EMAIL_TO=your-email@gmail.com
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=10485760
JWT_SECRET=any-random-string
SESSION_SECRET=any-random-string
```

**For Gmail:**
- Enable 2-Factor Authentication
- Generate App Password: [Google App Passwords](https://support.google.com/accounts/answer/185833)
- Use the generated password in `EMAIL_PASS`

### 4. Configure Frontend (Optional)

Create `.env` in root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

### 5. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 6. Access Your Website

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## ✅ Verify It's Working

1. Open http://localhost:5173
2. Navigate to Contact page
3. Fill out the form
4. Submit
5. Check:
   - Success message appears
   - Backend console shows project created
   - MongoDB has new entry
   - Email notifications sent (if configured)

## 🐛 Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Verify port 5000 is available
- Check `.env` file exists and is configured

### Frontend can't connect to backend
- Verify backend is running
- Check `VITE_API_URL` in `.env`
- Check CORS settings in backend

### Email not working
- Verify Gmail app password is correct
- Check spam folder
- Test with different email service

### File upload not working
- Check `uploads` folder exists in `server/`
- Verify file size is under limit
- Check file type is allowed

## 📚 Next Steps

1. **Customize Content**: Update text, images, and colors
2. **Configure Email**: Set up email service for notifications
3. **Deploy**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
4. **Add Features**: Extend backend API as needed

## 🆘 Need Help?

- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review [server/README.md](./server/README.md) for backend details
- Check console logs for errors

## 🎉 You're All Set!

Your HYRINX Web Services website is now running locally!

