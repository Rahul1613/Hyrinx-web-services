import nodemailer from 'nodemailer'

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

// Send email to admin about new project
export const sendProjectNotification = async (projectData) => {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Project Request: ${projectData.service}`,
      html: `
        <h2>New Project Request Received</h2>
        <p><strong>Name:</strong> ${projectData.fullName}</p>
        <p><strong>Email:</strong> ${projectData.email}</p>
        <p><strong>Phone:</strong> ${projectData.phone}</p>
        <p><strong>Service:</strong> ${projectData.service}</p>
        <p><strong>Deadline:</strong> ${projectData.deadline || 'Not specified'}</p>
        <p><strong>Description:</strong></p>
        <p>${projectData.description}</p>
        ${projectData.fileUrl ? `<p><strong>File:</strong> <a href="${projectData.fileUrl}">Download</a></p>` : ''}
        <hr>
        <p>Project ID: ${projectData._id}</p>
        <p>Submitted: ${new Date(projectData.createdAt).toLocaleString()}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log('✅ Project notification email sent')
  } catch (error) {
    console.error('❌ Error sending email:', error.message)
    // Don't throw error - email failure shouldn't break the API
  }
}

// Send confirmation email to user
export const sendConfirmationEmail = async (userEmail, projectData) => {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: userEmail,
      subject: 'Thank you for contacting HYRINX Web Services',
      html: `
        <h2>Thank you for your project request!</h2>
        <p>Dear ${projectData.fullName},</p>
        <p>We have received your project request for <strong>${projectData.service}</strong>.</p>
        <p>Our team will review your requirements and get back to you within 24 hours.</p>
        <hr>
        <p><strong>Project Details:</strong></p>
        <p>Service: ${projectData.service}</p>
        <p>Description: ${projectData.description.substring(0, 100)}...</p>
        <hr>
        <p>Best regards,<br>HYRINX Web Services Team</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log('✅ Confirmation email sent to user')
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error.message)
  }
}

