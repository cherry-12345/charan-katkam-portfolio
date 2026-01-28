'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const quickFacts = [
    { label: 'Location', value: 'Hyderabad, India', icon: '📍' },
    { label: 'Background', value: 'AI + Full Stack', icon: '💻' },
    { label: 'Languages', value: 'English, Telugu, Hindi', icon: '🗣️' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong focus on AI integration and modern web technologies. 
              Currently pursuing my B.Tech in Computer Science Engineering at Sreenidhi Institute of Science and Technology, 
              I combine academic knowledge with practical experience to create innovative solutions.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My expertise spans across frontend frameworks like React and Next.js, backend technologies, 
              and AI/ML implementations. I enjoy building user-centric applications that solve real-world problems 
              while maintaining clean, efficient code and exceptional user experiences.
            </p>

            {/* Quick Facts */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl mb-2">{fact.icon}</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {fact.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {fact.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}