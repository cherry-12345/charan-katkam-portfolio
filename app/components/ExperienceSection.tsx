'use client'

import { motion } from 'framer-motion'

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: 'AI SDLC Intern',
      company: 'Internship Project',
      period: '2024',
      type: 'Internship',
      description: 'Developed SmartSDLC, an AI-enhanced Software Development Lifecycle platform focused on automation and early risk detection.',
      achievements: [
        'Built AI-powered requirement check module using Gemini that flags risky requirements before development, reducing potential rework by catching ambiguities early',
        'Implemented automated task routing system that assigns tickets to appropriate team members based on skillset and workload, improving sprint planning efficiency',
        'Developed real-time progress tracking dashboard with early risk signals for project managers, enabling proactive intervention on at-risk deliverables',
        'Integrated JWT authentication and role-based access control for secure team collaboration'
      ],
      tech: ['React', 'Node.js', 'Express', 'Gemini AI', 'JWT', 'MongoDB']
    }
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
            Practical experience building AI-powered solutions that deliver measurable impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="studio-surface rounded-md p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.25em] font-mono rounded-full border border-blue-500/40 text-blue-400">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
