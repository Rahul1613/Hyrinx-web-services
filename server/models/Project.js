import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Service selection is required'],
      enum: [
        'Mini Projects',
        'Final Year Projects',
        'Frontend Only',
        'AI + ML Projects',
        'College Assignments',
        'Website for Small Shops',
        'Portfolio Websites',
        'Branding Package',
        'Digital Marketing Help',
        'Other',
      ],
    },
    deadline: {
      type: Date,
      default: null,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
    },
    fileUrl: {
      type: String,
      default: null,
    },
    fileName: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium',
    },
    estimatedPrice: {
      type: Number,
      default: null,
    },
    notes: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
)

// Index for faster queries
projectSchema.index({ email: 1, createdAt: -1 })
projectSchema.index({ status: 1 })

const Project = mongoose.model('Project', projectSchema)

export default Project

