'use client'

import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'SmartSDLC',
      description: 'AI-Enhanced Software Development Lifecycle platform that streamlines project management with intelligent automation, real-time collaboration, and predictive analytics.',
      tech: ['React', 'Node.js', 'Express', 'Gemini AI', 'JWT'],
      features: ['AI-powered insights', 'Task automation', 'Team collaboration', 'Progress tracking'],
      github: 'https://github.com/cherry-12345/SmartSDLC-AI-Enhanced-Software-Development-Lifecycle',
      demo: '#',
      status: 'In Development'
    },
    {
      id: 2,
      title: 'AJ Abhi Jewels',
      description: 'Full-stack e-commerce platform for jewelry retail featuring product catalog, shopping cart, secure checkout, and responsive design.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT'],
      features: ['Product catalog', 'Shopping cart', 'User authentication', 'Order management'],
      github: 'https://github.com/cherry-12345/Abhi-Jewels',
      demo: 'https://abhi-jewels.vercel.app',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Air Cursor Using Hand Gestures',
      description: 'Computer vision application enabling touchless cursor control through real-time hand gesture recognition using OpenCV and MediaPipe.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
      features: ['Hand tracking', 'Gesture recognition', 'Cursor control', 'Click detection'],
      github: 'https://github.com/cherry-12345/Air-Cursor-Using-Hand-Gestures',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Music Streaming Website',
      description: 'Full-featured music streaming platform with playlist management, audio controls, and modern user interface design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
      features: ['Audio streaming', 'Playlist creation', 'Search functionality', 'Responsive UI'],
      github: 'https://github.com/cherry-12345/My-Music-Demo-Project',
      demo: '#',
      status: 'Completed'
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
    <section id="projects" className="py-24 md:py-28 bg-[color:var(--color-bg)]">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving capabilities across various domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="studio-surface rounded-md p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-[color:var(--color-text)] mb-2">
                    {project.title}
                  </h3>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.25em] font-mono rounded-full border ${
                    project.status === 'Completed' 
                      ? 'border-emerald-500/40 text-emerald-400'
                      : 'border-amber-500/40 text-amber-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="text-3xl">
                  {index === 0 ? '🤖' : index === 1 ? '💎' : index === 2 ? '👋' : '🎵'}
                </div>
              </div>

              {/* Description */}
              <p className="text-[color:var(--color-muted)] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-[color:var(--color-text)] mb-3">Key Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[color:var(--color-muted)]">
                      <span className="w-2 h-2 bg-[color:var(--color-accent)] rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-medium text-[color:var(--color-text)] mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tag-chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 btn-outline text-center"
                  aria-label={`View ${project.title} code`}
                >
                  View Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 btn-primary text-center"
                  aria-label={`View ${project.title} demo`}
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-[color:var(--color-muted)] mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/cherry-12345"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}