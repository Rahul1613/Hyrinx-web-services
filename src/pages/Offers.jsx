import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Instagram Follow Discount',
      icon: '🎉',
      description: 'Follow our Instagram page and get an instant 10% OFF on any service!',
      details: [
        'Follow @hyrinx_webservices',
        'Show us the follow proof',
        'Get 10% discount on your project',
        'Valid for all services',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 2,
      title: 'Referral Bonus',
      icon: '🎁',
      description: 'Bring 6 new customers to us and get 1 project completely FREE!',
      details: [
        'Refer 6 friends or classmates',
        'They must complete a project with us',
        'Get any project of your choice FREE',
        'No expiry date on this offer',
      ],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 3,
      title: 'Quick Delivery Offer',
      icon: '⚡',
      description: 'Need it fast? Pay just ₹200 extra for express 1-day delivery!',
      details: [
        'Standard delivery: 2-3 days',
        'Express delivery: 1 day',
        'Only ₹200 extra charge',
        'Available for mini projects & assignments',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 4,
      title: 'Business Starter Pack',
      icon: '🏆',
      description: 'Complete branding solution: Logo + Poster + Website (Landing Page) at special ₹9999!',
      details: [
        'Professional Logo Design',
        'Marketing Poster Design',
        'Complete Landing Page Website',
        'All for just ₹9999 (Save ₹3000+)',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text neon-glow">
            Special Offers
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exclusive deals and discounts to make our services even more affordable
          </p>
        </motion.div>
      </section>

      {/* Offers Grid */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="relative group"
              >
                <div className="glass rounded-3xl p-8 h-full hover:bg-white/10 transition-all relative overflow-hidden">
                  {/* Gradient Background Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="absolute top-4 right-4 text-4xl"
                  >
                    {offer.icon}
                  </motion.div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      {offer.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      {offer.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {offer.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-primary text-xl">✓</span>
                          <span className="text-gray-400">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-4 bg-gradient-to-r ${offer.color} rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all`}
                      >
                        Claim This Offer
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text text-center">
              Terms & Conditions
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                • Offers cannot be combined unless explicitly stated
              </p>
              <p>
                • All offers are subject to availability and project complexity
              </p>
              <p>
                • Discounts apply to base pricing only
              </p>
              <p>
                • HYRINX reserves the right to modify or cancel offers at any time
              </p>
              <p>
                • Contact us before starting your project to claim any offer
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Claim Your Offer?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us now and mention which offer you'd like to use!
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white text-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
              >
                Contact Us Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Offers

