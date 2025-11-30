import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Video is now served from the public directory
const heroVideo = '/videos/hero-background.mp4'
import heroImage from '../assets/images/hero-image.jpg'
import testimonialImage from '../assets/images/testimonial-image.jpg'

const Home = () => {
  const features = [
    {
      title: 'Student Projects at Lowest Cost',
      icon: '🎓',
      description: 'Affordable project solutions tailored for students',
    },
    {
      title: 'Website Development',
      icon: '🌐',
      description: 'Modern, responsive websites for all needs',
    },
    {
      title: 'App UI & UX',
      icon: '📱',
      description: 'Beautiful and intuitive app designs',
    },
    {
      title: 'Business Branding',
      icon: '🎨',
      description: 'Complete branding solutions for businesses',
    },
    {
      title: 'Poster / Logo Designing',
      icon: '🖼️',
      description: 'Creative designs that make your brand stand out',
    },
    {
      title: 'AI Tools Assistance',
      icon: '🤖',
      description: 'Leverage AI tools for enhanced productivity',
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Final Year Student',
      text: 'HYRINX helped me complete my final year project on time and within budget. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      text: 'Got my website and branding done at an amazing price. The quality exceeded my expectations!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'College Student',
      text: 'Best service for students. They understand our budget constraints and deliver quality work.',
      rating: 5,
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl blob"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl blob"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        
        <div className="container mx-auto text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text neon-glow">HYRINX</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
              Web Services
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Affordable Projects for Students & Powerful Solutions for Local Businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
              >
                Start Your Project Today
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
              >
                View Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose HYRINX
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              We combine affordability with quality, making professional web services
              accessible to students and small businesses alike.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto rounded-2xl overflow-hidden glass"
            >
              <img
                src={heroImage}
                alt="HYRINX Team"
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What Our Clients Say
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden glass"
            >
              <img
                src={testimonialImage}
                alt="Happy Clients"
                className="w-full h-48 md:h-64 object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with us today and let's bring your ideas to life!
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white text-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
              >
                Start Your Project Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

