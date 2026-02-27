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
    <section id="about" className="py-24 md:py-28 bg-[color:var(--color-bg)]">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div
                className="w-80 h-80 rounded-full p-1"
                style={{
                  background:
                    'linear-gradient(145deg, var(--color-accent), var(--color-accent-alt))',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[color:var(--color-surface)]">
                  <Image
                    src="/photo.png"
                    alt="Charan Katkam"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-top scale-125"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-10"
          >
            <p className="text-lg text-[color:var(--color-muted)] leading-relaxed">
              I'm a passionate Full Stack Developer with a strong focus on AI integration and modern web technologies.
              Currently pursuing my B.Tech in Computer Science Engineering (Class of 2026) at G. Pullaiah College of Engineering and Technology,
              I combine academic knowledge with hands-on development to deliver impactful solutions.
            </p>

            <p className="text-lg text-[color:var(--color-muted)] leading-relaxed">
              I got into AI tooling because I wanted to see how much developer effort could be automated — and SmartSDLC was my answer to that question.
              My expertise spans React, Next.js, Node.js, and AI/ML implementations using TensorFlow and OpenCV. I build tools that make developers faster,
              focusing on measurable outcomes like reducing QA effort and catching requirement risks early.
            </p>

            <p className="text-base text-[color:var(--color-accent)] font-medium mt-4">
              Currently Learning: LangChain, RAG pipelines, and advanced prompt engineering for production AI systems.
            </p>

            {/* Quick Facts */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="studio-surface p-4 rounded-2xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl mb-2">{fact.icon}</div>
                  <div className="font-semibold text-[color:var(--color-text)] text-xs uppercase tracking-[0.2em] font-mono">
                    {fact.label}
                  </div>
                  <div className="text-[color:var(--color-muted)] text-sm mt-2">
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
