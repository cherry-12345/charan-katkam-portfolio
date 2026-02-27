'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const ROLES = ['I ship AI tools with measurable impact', 'Full Stack Developer', 'Open to 2026 Internships']

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden studio-grid hero-grid-enhanced py-28 md:py-36 bg-[color:var(--color-bg)]"
    >
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-gradient-to-br from-[rgba(47,107,255,0.08)] to-[rgba(47,107,255,0.02)] rotate-[20deg] rounded-xl pointer-events-none z-0" />

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-7"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-muted)] font-mono"
          >
            Portfolio Index
            <span className="h-px w-12 bg-[color:var(--color-border)]" />
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-semibold text-[color:var(--color-text)] overflow-hidden leading-[0.92] tracking-tight relative max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="inline-block relative"
            >
              Charan Katkam
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl font-normal text-[color:var(--color-muted)] overflow-hidden min-h-[2.5rem] md:min-h-[3rem]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="inline-block text-[color:var(--color-muted)] transition-all duration-500 font-medium"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto leading-relaxed"
          >
            Full Stack Developer who measures every feature shipped. I build AI-powered tools that reduce QA effort by 60% and catch requirement risks before they become bugs.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="studio-surface rounded-2xl px-4 py-3 text-center">
              <p className="text-2xl font-medium text-[color:var(--color-text)]">60%</p>
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-[color:var(--color-muted)]">
                QA Effort Reduced
              </p>
            </div>
            <div className="studio-surface rounded-2xl px-4 py-3 text-center">
              <p className="text-2xl font-medium text-[color:var(--color-text)]">95%+</p>
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-[color:var(--color-muted)]">
                PDF Classification
              </p>
            </div>
            <div className="studio-surface rounded-2xl px-4 py-3 text-center">
              <p className="text-2xl font-medium text-[color:var(--color-text)]">100+</p>
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-[color:var(--color-muted)]">
                E-commerce SKUs
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Real Demos
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[color:var(--color-border)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[color:var(--color-muted)] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
