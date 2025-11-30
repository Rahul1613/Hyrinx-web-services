import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// @route   GET /api/uploads/:filename
// @desc    Serve uploaded files
// @access  Public
router.get('/:filename', (req, res) => {
  try {
    const filename = req.params.filename
    const filePath = path.join(__dirname, '..', 'uploads', filename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        error: 'File not found',
      })
    }

    // Send file
    res.sendFile(path.resolve(filePath))
  } catch (error) {
    console.error('Error serving file:', error)
    res.status(500).json({
      success: false,
      error: 'Error serving file',
    })
  }
})

export default router

