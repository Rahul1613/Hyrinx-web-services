import express from 'express'
import { body, validationResult } from 'express-validator'
import Project from '../models/Project.js'
import upload from '../middleware/upload.js'
import { sendProjectNotification, sendConfirmationEmail } from '../utils/emailService.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Validation rules
const projectValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('service').notEmpty().withMessage('Service selection is required'),
  body('description').trim().notEmpty().withMessage('Project description is required'),
]

// @route   POST /api/projects
// @desc    Create a new project request
// @access  Public
router.post('/', upload.single('file'), projectValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      })
    }

    // Prepare project data
    const projectData = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      service: req.body.service,
      deadline: req.body.deadline || null,
      description: req.body.description,
    }

    // Handle file upload
    if (req.file) {
      // In production, upload to cloud storage (AWS S3, Cloudinary, etc.)
      // For now, we'll store the file path
      projectData.fileUrl = `/api/uploads/${req.file.filename}`
      projectData.fileName = req.file.originalname
    }

    // Create project
    const project = await Project.create(projectData)

    // Send notification emails (async, don't wait)
    sendProjectNotification(project).catch(console.error)
    sendConfirmationEmail(project.email, project).catch(console.error)

    res.status(201).json({
      success: true,
      message: 'Project request submitted successfully',
      data: project,
    })
  } catch (error) {
    console.error('Error creating project:', error)
    res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.',
    })
  }
})

// @route   GET /api/projects
// @desc    Get all projects (with pagination)
// @access  Private (should be protected in production)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const skip = (page - 1) * limit

    const filter = {}
    if (req.query.status) {
      filter.status = req.query.status
    }
    if (req.query.service) {
      filter.service = req.query.service
    }

    const projects = await Project.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await Project.countDocuments(filter)

    res.json({
      success: true,
      data: projects,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
})

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      })
    }

    res.json({
      success: true,
      data: project,
    })
  } catch (error) {
    console.error('Error fetching project:', error)
    res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
})

// @route   PUT /api/projects/:id
// @desc    Update project status
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const { status, priority, estimatedPrice, notes } = req.body

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        ...(status && { status }),
        ...(priority && { priority }),
        ...(estimatedPrice && { estimatedPrice }),
        ...(notes && { notes }),
      },
      { new: true, runValidators: true }
    )

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      })
    }

    res.json({
      success: true,
      data: project,
    })
  } catch (error) {
    console.error('Error updating project:', error)
    res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
})

// @route   DELETE /api/projects/:id
// @desc    Delete project
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      })
    }

    // Delete associated file if exists
    if (project.fileUrl) {
      const fs = await import('fs')
      const filePath = path.join(__dirname, '..', 'uploads', path.basename(project.fileUrl))
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
      }
    }

    await project.deleteOne()

    res.json({
      success: true,
      message: 'Project deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting project:', error)
    res.status(500).json({
      success: false,
      error: 'Server error',
    })
  }
})

export default router

