import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: 'Student Projects',
      questions: [
        {
          q: 'How much do student projects cost?',
          a: 'Our pricing is very affordable for students. Mini projects start from ₹999, final year projects from ₹2999, and assignments from ₹499. We understand student budgets and offer flexible payment options.',
        },
        {
          q: 'How long does it take to complete a student project?',
          a: 'Timelines vary: Mini projects (2-3 days), Final year projects (1-2 weeks), Assignments (1-2 days). We always discuss and confirm timelines before starting to ensure we meet your submission deadlines.',
        },
        {
          q: 'Do you provide documentation and code comments?',
          a: 'Yes! All projects include proper documentation, code comments, and a README file. For final year projects, we also provide project reports and presentation materials.',
        },
        {
          q: 'Can I request revisions?',
          a: 'Absolutely! We offer up to 3 free revisions for all student projects. We want to ensure you\'re completely satisfied with the final deliverable.',
        },
        {
          q: 'What if I need help after project delivery?',
          a: 'We provide 30 days of free support after project delivery. You can contact us for any clarifications, bug fixes, or minor modifications.',
        },
        {
          q: 'Do you handle project submissions?',
          a: 'We complete the project and provide all necessary files. You\'ll need to submit it yourself, but we ensure everything is ready and properly formatted for submission.',
        },
      ],
    },
    {
      category: 'Business Services',
      questions: [
        {
          q: 'What is included in the Business Starter Pack?',
          a: 'The Business Starter Pack (₹9999) includes: Professional Logo Design, Marketing Poster Design, and a complete Landing Page Website. This is a complete branding solution for new businesses.',
        },
        {
          q: 'Do you provide hosting for websites?',
          a: 'We can help you set up hosting and domain. We provide guidance on choosing the right hosting provider and can assist with deployment. Hosting costs are separate and vary based on your needs.',
        },
        {
          q: 'Can you update my existing website?',
          a: 'Yes! We can update, redesign, or add new features to your existing website. Contact us with your requirements and we\'ll provide a quote.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept UPI, bank transfers, and other digital payment methods. For larger projects, we typically take 50% advance and 50% on completion.',
        },
      ],
    },
    {
      category: 'General',
      questions: [
        {
          q: 'How do I get started?',
          a: 'Simply fill out the contact form on our Contact page with your project details. We\'ll get back to you within 24 hours with a quote and timeline.',
        },
        {
          q: 'Do you work on urgent projects?',
          a: 'Yes! We offer express delivery for urgent projects. For an additional ₹200, we can deliver mini projects and assignments within 24 hours (subject to availability).',
        },
        {
          q: 'Can I see examples of your previous work?',
          a: 'Absolutely! Contact us and we\'ll share our portfolio and case studies relevant to your project type. We have examples across all our service categories.',
        },
        {
          q: 'What makes HYRINX different?',
          a: 'We specialize in affordable solutions without compromising quality. We understand student budgets and small business needs, offering professional services at competitive prices with excellent customer support.',
        },
        {
          q: 'Do you offer discounts?',
          a: 'Yes! Check our Offers page for current discounts. We have an Instagram follow discount (10% OFF), referral bonuses, and special packages. Follow us on Instagram to stay updated on new offers!',
        },
      ],
    },
  ]

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services, pricing, and process
          </p>
        </motion.div>
      </section>

      {/* FAQ Sections */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`
                  const isOpen = openIndex === index

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: questionIndex * 0.05 }}
                      className="glass rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                      >
                        <span className="font-semibold text-white pr-4">
                          {faq.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-primary text-2xl flex-shrink-0"
                        >
                          ▼
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 text-gray-300 border-t border-white/10">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Contact us directly and we'll be happy to help!
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white text-lg shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 transition-all"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

