# HYRINX Backend API

Complete backend API for HYRINX Web Services website.

## 🚀 Features

- **RESTful API** with Express.js
- **MongoDB** database for data storage
- **File Upload** support with Multer
- **Email Notifications** using Nodemailer
- **Input Validation** with express-validator
- **Security** with Helmet and rate limiting
- **Error Handling** middleware
- **CORS** enabled for frontend connection

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (file uploads)
- Nodemailer (email service)
- Helmet (security)
- CORS

## 🛠️ Installation

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

## 🔧 Configuration

### Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `EMAIL_HOST` - SMTP host
- `EMAIL_PORT` - SMTP port
- `EMAIL_USER` - Email username
- `EMAIL_PASS` - Email password
- `EMAIL_FROM` - Sender email
- `EMAIL_TO` - Admin email for notifications
- `FRONTEND_URL` - Frontend URL for CORS
- `MAX_FILE_SIZE` - Max file upload size (bytes)
- `JWT_SECRET` - JWT secret key
- `SESSION_SECRET` - Session secret key

## 🚀 Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Projects
- `POST /api/projects` - Create new project request
- `GET /api/projects` - Get all projects (with pagination)
- `GET /api/projects/:id` - Get single project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### File Uploads
- `GET /api/uploads/:filename` - Serve uploaded files

## 📝 Project Request Format

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "Final Year Projects",
  "deadline": "2024-12-31",
  "description": "Project description here"
}
```

## 📧 Email Notifications

The backend automatically sends:
1. **Admin Notification** - When a new project is submitted
2. **User Confirmation** - Confirmation email to the user

## 🔒 Security Features

- Helmet.js for security headers
- Rate limiting (100 requests per 15 minutes)
- Input validation
- File type validation
- CORS protection
- Error handling

## 📁 Project Structure

```
server/
├── config/
│   └── database.js          # MongoDB connection
├── middleware/
│   ├── upload.js           # File upload configuration
│   └── errorHandler.js     # Error handling
├── models/
│   ├── Project.js          # Project model
│   └── Contact.js          # Contact model
├── routes/
│   ├── projectRoutes.js    # Project routes
│   └── uploadRoutes.js     # File serving routes
├── utils/
│   └── emailService.js     # Email service
├── uploads/                # Uploaded files directory
├── server.js               # Main server file
├── package.json
└── .env                    # Environment variables
```

## 🌐 Deployment

### MongoDB Atlas Setup
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

### Deploy to Platforms

#### Render.com / Railway / Heroku
1. Push code to GitHub
2. Connect repository to platform
3. Add environment variables
4. Deploy

#### VPS (DigitalOcean, AWS, etc.)
1. Install Node.js and MongoDB
2. Clone repository
3. Install dependencies
4. Set up PM2 for process management
5. Configure Nginx as reverse proxy
6. Set up SSL certificate

### Environment Variables for Production
- Set `NODE_ENV=production`
- Use secure MongoDB connection string
- Configure email service
- Set strong secrets
- Update `FRONTEND_URL` to production domain

## 📊 Database Models

### Project
- Full name, email, phone
- Service type
- Deadline, description
- File uploads
- Status tracking
- Timestamps

### Contact
- Name, email, phone
- Subject, message
- Read/responded status
- Timestamps

## 🔐 Security Best Practices

1. Never commit `.env` file
2. Use strong secrets in production
3. Enable MongoDB authentication
4. Use HTTPS in production
5. Regularly update dependencies
6. Monitor rate limits
7. Validate all inputs
8. Sanitize file uploads

## 📞 Support

For issues or questions, contact the development team.

