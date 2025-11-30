import { useState } from 'react'
import { motion } from 'framer-motion'
import contactVideo from '../assets/videos/contact-background.mp4'
import portfolioImage from '../assets/images/portfolio-image.jpg'
import { uploadFile } from '../config/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    deadline: '',
    description: '',
    file: null,
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const services = [
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
  ]

  const faqs = [
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on complexity. Mini projects typically take 2-3 days, while final year projects may take 1-2 weeks. We always discuss timelines before starting.',
    },
    {
      question: 'Do you provide revisions?',
      answer: 'Yes! We offer up to 3 free revisions for all projects to ensure you\'re completely satisfied with the final result.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, bank transfers, and other digital payment methods. Payment terms are discussed after project confirmation.',
    },
    {
      question: 'Can I see examples of previous work?',
      answer: 'Absolutely! Contact us and we\'ll share our portfolio and case studies relevant to your project type.',
    },
  ]

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      submitData.append('fullName', formData.fullName)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('service', formData.service)
      submitData.append('description', formData.description)
      
      if (formData.deadline) {
        submitData.append('deadline', formData.deadline)
      }
      
      if (formData.file) {
        submitData.append('file', formData.file)
      }

      // Submit to backend
      const response = await uploadFile('/projects', submitData)

      if (response.success) {
        setSuccess(true)
        setSubmitted(true)
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          deadline: '',
          description: '',
          file: null,
        })

        // Reset file input
        const fileInput = document.querySelector('input[type="file"]')
        if (fileInput) fileInput.value = ''

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
          setSuccess(false)
        }, 5000)
      }
    } catch (err) {
      console.error('Submission error:', err)
      setError(err.message || 'Failed to submit project. Please try again.')
      setSubmitted(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Video Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={contactVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text neon-glow">
            Start Your Project
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Project Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-gray-900">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Describe your project requirements in detail..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Partial Project (Optional)
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary transition-all"
                />
              </div>

              {error && (
                <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                  Project submitted successfully! We'll get back to you within 24 hours.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white text-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all ${
                  loading || submitted ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading
                  ? 'Submitting...'
                  : submitted
                  ? 'Submitted Successfully! ✓'
                  : 'Submit Project Request'}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Promise Text */}
            <div className="glass rounded-3xl p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Our Promise
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We complete student projects with the lowest budget and the highest quality.
                  Your success is our priority, and we're committed to delivering excellence
                  within your budget constraints.
                </p>
              </motion.div>
            </div>

            {/* FAQ Section */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Quick FAQ</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-white/10 pb-4 last:border-0"
                  >
                    <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Portfolio Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl overflow-hidden"
            >
              <img
                src={portfolioImage}
                alt="Our Portfolio"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text text-center">
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {['⚡', '💎', '🎯', '🚀', '⭐', '💼'].map((icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-4xl text-center"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

