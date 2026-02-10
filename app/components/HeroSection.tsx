'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden studio-grid studio-noise py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-10 h-64 w-64 bg-[color:var(--color-accent)] opacity-10 rotate-12" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[color:var(--color-bg)] to-transparent" />
      </div>

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
            className="text-6xl md:text-8xl font-medium text-[color:var(--color-text)] overflow-hidden leading-[0.92] tracking-tight"
          >
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="inline-block"
            >
              Charan Katkam
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-normal text-[color:var(--color-muted)] overflow-hidden"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="inline-block"
            >
              Full Stack Developer | AI Systems
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto leading-relaxed"
          >
            Building intelligent, fast, and user-focused web experiences with modern technologies and AI integration.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
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