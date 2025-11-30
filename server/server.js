import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import connectDB from './config/database.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import projectRoutes from './routes/projectRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

// Load environment variables
dotenv.config()

// Ensure uploads directory exists
import fs from 'fs'
const uploadDir = './uploads'
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
  console.log('✅ Created uploads directory')
}

// Connect to database
connectDB()

// Initialize Express
const app = express()

// Security middleware
app.use(helmet())
app.use(compression())

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
})
app.use('/api/', limiter)

// Body parser middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'HYRINX Backend API is running',
    timestamp: new Date().toISOString(),
  })
})

app.use('/api/projects', projectRoutes)
app.use('/api/uploads', uploadRoutes)

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

// Start server
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

app.listen(PORT, () => {
  console.log(`🚀 Server running in ${NODE_ENV} mode on port ${PORT}`)
  console.log(`📡 API available at http://localhost:${PORT}/api`)
})

export default app

