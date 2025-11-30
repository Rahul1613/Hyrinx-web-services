# HYRINX Web Services - Complete Website

A modern, premium full-stack website for HYRINX Web Services with React frontend and Node.js backend.

## 🚀 Features

### Frontend
- **Modern Design**: Inspired by Persevex with smooth animations, 3D-like effects, gradients, and glass UI
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations throughout the site
- **Multiple Pages**: Home, Services, Contact, Offers, FAQ, and About pages
- **Glass Morphism**: Beautiful glass UI effects
- **Gradient Effects**: Purple theme with neon glow effects
- **Cursor Glow**: Interactive cursor effect

### Backend
- **RESTful API**: Express.js backend with MongoDB
- **File Uploads**: Support for project file submissions
- **Email Notifications**: Automatic email notifications for new projects
- **Input Validation**: Secure form validation
- **Security**: Helmet, CORS, rate limiting
- **Error Handling**: Comprehensive error handling

## 📦 Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Multer** - File uploads
- **Nodemailer** - Email service

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (optional for local development):
```bash
VITE_API_URL=http://localhost:5000/api
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
   - MongoDB connection string
   - Email credentials
   - Frontend URL
   - Other settings

5. Start development server:
```bash
npm run dev
```

6. Start production server:
```bash
npm start
```

### Running Both (Development)

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Backend runs on `http://localhost:5000`
Frontend runs on `http://localhost:5173`

## 📁 Project Structure

```
website/
├── src/                          # Frontend source
│   ├── components/              # React components
│   ├── pages/                   # Page components
│   ├── config/                  # Configuration files
│   ├── assets/                  # Images and videos
│   ├── App.jsx
│   └── main.jsx
├── server/                       # Backend source
│   ├── config/                  # Database config
│   ├── models/                  # MongoDB models
│   ├── routes/                  # API routes
│   ├── middleware/              # Express middleware
│   ├── utils/                   # Utility functions
│   ├── uploads/                 # Uploaded files
│   └── server.js                # Main server file
├── index.html
├── package.json                 # Frontend dependencies
├── server/package.json          # Backend dependencies
└── DEPLOYMENT.md                # Deployment guide
```

## 🎨 Pages

1. **Home** (`/`) - Hero section, features, testimonials, and CTA
2. **Services** (`/services`) - Student and business services in grid layout
3. **Contact** (`/contact`) - Project submission form with FAQ
4. **Offers** (`/offers`) - Special deals and discounts
5. **FAQ** (`/faq`) - Frequently asked questions
6. **About** (`/about`) - About HYRINX and mission

## 🎯 Key Features

- Smooth scroll animations
- Glass morphism effects
- Floating gradient blobs
- Hover animations
- Responsive navigation
- Form handling (frontend only)
- Animated cards and sections

## 🎨 Color Scheme

- Primary: `#6C47FF`
- Secondary: `#A36BFF`
- Background: Black with gradients
- Text: White with gray variations

## 📝 Notes

- **Full-stack application** with React frontend and Node.js backend
- Form submissions are handled by the backend API
- All animations use Framer Motion
- Styling uses TailwindCSS with custom configurations
- Backend includes email notifications and file upload support

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick deployment options:
- **Render.com** - Free tier available
- **Vercel** (Frontend) + **Railway** (Backend)
- **Netlify** (Frontend) + **Heroku** (Backend)
- **VPS** - DigitalOcean, AWS, etc.

## 🔧 Customization

To customize colors, edit `tailwind.config.js`:
```js
colors: {
  primary: '#6C47FF',
  secondary: '#A36BFF',
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

All rights reserved © HYRINX — 2025

