'use client'

import { motion } from 'framer-motion'

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'AI / ML',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Prompt Engineering']
    },
    {
      title: 'Backend & Tools',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Jupyter', 'REST APIs']
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
    <section id="skills" className="py-24 md:py-28 bg-[color:var(--color-bg)]">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="studio-surface rounded-md p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-[color:var(--color-text)]">
                  {category.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-muted)] font-mono">
                  {category.title === 'Frontend' ? 'UI' : category.title === 'AI / ML' ? 'AI' : 'BE'}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="tag-chip cursor-pointer hover:text-[color:var(--color-text)] hover:border-[color:var(--color-accent)] transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <h3 className="text-2xl font-medium text-center text-[color:var(--color-text)] mb-8">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Responsive Design',
              'REST API Integration',
              'Database Design',
              'Git & Version Control',
              'Agile Teamwork'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="studio-surface p-4 rounded-md text-center shadow-md hover:shadow-xl transition-all cursor-pointer hover:border-[color:var(--color-accent)]"
              >
                <span className="text-[color:var(--color-text)] font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}