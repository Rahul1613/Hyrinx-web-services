import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Video is now served from the public directory
const servicesVideo = '/videos/services-background.mp4'
import servicesImage from '../assets/images/services-image.jpg'
import studentImage from '../assets/images/student-image.jpg'
import businessImage from '../assets/images/business-image.jpg'

const Services = () => {
  const studentServices = [
    {
      title: 'Mini Projects',
      icon: '📚',
      description: 'Small-scale projects perfect for learning and practice. Ideal for beginners and intermediate students.',
      price: 'Starting from ₹999',
    },
    {
      title: 'Final Year Projects',
      icon: '🎓',
      description: 'Complete final year projects with documentation, source code, and presentation support.',
      price: 'Starting from ₹2999',
    },
    {
      title: 'Frontend Only',
      icon: '💻',
      description: 'Beautiful, responsive frontend designs using modern frameworks like React, Vue, or Angular.',
      price: 'Starting from ₹1499',
    },
    {
      title: 'Full Stack (Coming Soon)',
      icon: '🚀',
      description: 'Complete full-stack applications with backend integration. Coming soon!',
      price: 'Coming Soon',
      comingSoon: true,
    },
    {
      title: 'AI + ML Projects',
      icon: '🤖',
      description: 'Artificial Intelligence and Machine Learning projects with modern algorithms and datasets.',
      price: 'Starting from ₹3999',
    },
    {
      title: 'College Assignments + Submissions',
      icon: '📝',
      description: 'Complete assignment solutions with proper documentation and code comments.',
      price: 'Starting from ₹499',
    },
  ]

  const businessServices = [
    {
      title: 'Website for Small Shops',
      icon: '🏪',
      description: 'Affordable, professional websites for local shops and small businesses. Mobile-friendly and SEO optimized.',
      price: 'Starting from ₹4999',
    },
    {
      title: 'Portfolio Websites',
      icon: '👤',
      description: 'Stunning portfolio websites to showcase your work, skills, and achievements.',
      price: 'Starting from ₹2999',
    },
    {
      title: 'Branding Package',
      icon: '🎨',
      description: 'Complete branding solution: Logo + Poster + Social Media Kit. Professional designs that represent your brand.',
      price: 'Starting from ₹1999',
    },
    {
      title: 'Digital Marketing Help',
      icon: '📈',
      description: 'Social media management, content creation, and digital marketing strategies for your business.',
      price: 'Starting from ₹2999',
    },
  ]

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 text-center z-10 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={servicesVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text neon-glow">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Comprehensive web services tailored for students and businesses
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden glass"
          >
            <img
              src={servicesImage}
              alt="Our Services"
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Student Services */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Student Services
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Affordable solutions designed specifically for students
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden glass"
            >
              <img
                src={studentImage}
                alt="Student Services"
                className="w-full h-48 md:h-64 object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all relative overflow-hidden group"
              >
                {service.comingSoon && (
                  <div className="absolute top-4 right-4 bg-secondary/80 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Coming Soon
                  </div>
                )}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-primary font-semibold mb-4">{service.price}</p>
                {!service.comingSoon && (
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
                    >
                      Contact Now
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Business Services
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Powerful solutions to grow your local business
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden glass"
            >
              <img
                src={businessImage}
                alt="Business Services"
                className="w-full h-48 md:h-64 object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all relative overflow-hidden group"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                <p className="text-primary font-semibold mb-4">{service.price}</p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    Contact Now
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Don't See What You Need?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us and we'll create a custom solution for you!
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white text-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
              >
                Get Custom Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

