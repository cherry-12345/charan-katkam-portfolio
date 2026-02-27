'use client'

import { motion } from 'framer-motion'

type ExperienceLink = {
  label: string
  href: string
}

type Experience = {
  id: number
  role: string
  company: string
  period: string
  type: 'Internship' | 'Freelance'
  description: string
  achievements: string[]
  tech: string[]
  links?: ExperienceLink[]
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      role: 'AI SDLC Intern',
      company: 'Internship Project',
      period: '2025',
      type: 'Internship',
      description: 'Developed SmartSDLC, an AI-powered Gradio application that automates critical SDLC phases using IBM Granite 3.3 AI model.',
      achievements: [
        'Built AI-powered requirement classification module from PDF documents using IBM Granite 3.3, automatically categorizing requirements by type (functional, non-functional, constraints)',
        'Developed automated code generation system that produces Python code from natural language descriptions, accelerating development workflow',
        'Implemented intelligent bug fixing module that analyzes error messages, identifies root causes, and generates corrected code with explanations',
        'Created Pytest-based test case generation system that automatically produces unit tests for given code, improving code coverage and quality',
        'Designed code summarization feature that converts technical code into clear natural language explanations for documentation',
        'Integrated AI chatbot for real-time developer guidance on SDLC best practices and technical queries'
      ],
      tech: ['Python', 'Gradio', 'IBM Granite AI', 'Hugging Face', 'Google Colab', 'PyPDF2', 'Transformers'],
      links: [
        {
          label: 'GitHub Repo',
          href: 'https://github.com/cherry-12345/SmartSDLC-AI-Enhanced-Software-Development-Lifecycle'
        }
      ]
    },
    {
      id: 2,
      role: 'Freelance Full-Stack Developer',
      company: 'AJ Abhi Jewels',
      period: '2025',
      type: 'Freelance',
      description:
        'Delivered a premium jewelry e-commerce platform for AJ Abhi Jewels with production-ready architecture, conversion-focused UX, and secure checkout flow.',
      achievements: [
        'Built a modern Next.js 14 storefront with luxury branding, responsive layouts, and Framer Motion interactions for product discovery',
        'Implemented product search, advanced filtering, wishlist, and persistent cart flows for smooth repeat shopping sessions',
        'Integrated secure Razorpay payment flow and real-time cart/price calculations across the purchase journey',
        'Optimized performance using image optimization and lazy loading, targeting under-2-second load times on critical browse paths',
        'Shipped SEO-ready metadata, analytics hooks, and Vercel deployment setup to support discoverability and business operations'
      ],
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Prisma', 'PostgreSQL', 'Razorpay', 'Vercel'],
      links: [
        {
          label: 'Live Website',
          href: 'https://abhi-jewels.vercel.app'
        },
        {
          label: 'GitHub Repo',
          href: 'https://github.com/cherry-12345/Abhi-Jewels'
        }
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const typeClass = (type: Experience['type']) =>
    type === 'Freelance'
      ? 'border-[color:var(--color-accent-alt)] text-[color:var(--color-accent-alt)]'
      : 'border-[color:var(--color-accent)] text-[color:var(--color-accent)]'

  return (
    <section id="experience" className="py-24 md:py-28 bg-[color:var(--color-surface)]">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            Experience
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
            Practical experience delivering AI and full-stack products with measurable impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="studio-surface rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-[color:var(--color-text)] mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-[color:var(--color-accent)] font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.25em] font-mono rounded-full border ${typeClass(exp.type)}`}>
                    {exp.type}
                  </span>
                  <span className="text-[color:var(--color-muted)] font-mono text-sm">
                    📅 {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[color:var(--color-muted)] mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="font-medium text-[color:var(--color-text)] mb-3">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start text-[color:var(--color-muted)]"
                    >
                      <span className="w-2 h-2 bg-[color:var(--color-accent)] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-medium text-[color:var(--color-text)] mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tag-chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {exp.links && exp.links.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[color:var(--color-border)]">
                  <h4 className="font-medium text-[color:var(--color-text)] mb-3">Project Links:</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
