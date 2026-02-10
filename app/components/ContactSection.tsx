'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {



  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'charancherrykatkam@gmail.com',
      link: 'mailto:charancherrykatkam@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/charan-katkam-160135259',
      link: 'https://www.linkedin.com/in/charan-katkam-160135259/',
      external: true
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/cherry-12345',
      link: 'https://github.com/cherry-12345'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hyderabad, India',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-24 md:py-28 bg-[color:var(--color-bg)]">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-medium text-[color:var(--color-text)] mb-6">
                Get In Touch
              </h3>
              <p className="text-[color:var(--color-muted)] mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 studio-surface rounded-md hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <div className="font-medium text-[color:var(--color-text)]">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[color:var(--color-accent)] hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-[color:var(--color-muted)]">
                        {info.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="studio-surface p-6 rounded-md"
            >
              <h4 className="text-lg font-medium text-[color:var(--color-text)] mb-3">
                Download My Resume
              </h4>
              <p className="text-[color:var(--color-muted)] mb-4">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <motion.a
                href="/Charan_Resume_Dev.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 btn-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="studio-surface p-8 rounded-md"
          >
            <h3 className="text-2xl font-medium text-[color:var(--color-text)] mb-6">
              Send a Message
            </h3>
            
            <form action="https://formspree.io/f/mbdyyqdv" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)] font-mono mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-[color:var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)] font-mono mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[color:var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.25em] text-[color:var(--color-muted)] font-mono mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[color:var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}