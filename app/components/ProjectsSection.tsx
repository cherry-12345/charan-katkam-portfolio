'use client'

import { motion } from 'framer-motion'

type ProjectLink = {
  label: string
  href: string
  primary?: boolean
}

type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  impact: string[]
  links: ProjectLink[]
  status: 'Live' | 'Demo Ready' | 'Next Step'
  note?: string
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SmartSDLC',
      description:
        'AI-powered SDLC assistant that automates critical SDLC phases, reducing manual QA effort by around 60% and classifying requirements with 95%+ accuracy.',
      tech: ['Python', 'Gradio', 'IBM Granite AI', 'Hugging Face', 'Transformers', 'PyPDF2', 'Pytest'],
      impact: [
        'Reduced manual QA effort by around 60% via automated test-case generation.',
        'Reached 95%+ PDF requirement classification accuracy in module validation runs.',
        'Delivered 2-4 second response windows for key module actions.',
      ],
      links: [
        {
          label: 'Live Demo Video',
          href: 'https://drive.google.com/file/d/1Mz0vxiBIaC5eYsgmS9didfk1GCYbItHp/view',
          primary: true,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/cherry-12345/SmartSDLC-AI-Enhanced-Software-Development-Lifecycle',
        },
      ],
      status: 'Demo Ready',
    },
    {
      id: 2,
      title: 'AJ Abhi Jewels',
      description:
        'Full-stack e-commerce platform that handles 100+ jewelry products with sub-2 second load time and secure Razorpay checkout for end-to-end order flow.',
      tech: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'TypeScript'],
      impact: [
        'Handles 100+ SKU catalog navigation with category and price filters.',
        'Maintains sub-2 second load times on critical product browsing paths.',
        'Supports complete user flow: discovery -> cart -> payment -> order follow-up.',
      ],
      links: [
        {
          label: 'Open Live Demo',
          href: 'https://abhi-jewels.vercel.app',
          primary: true,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/cherry-12345/Abhi-Jewels',
        },
      ],
      status: 'Live',
    },
    {
      id: 3,
      title: 'Air Cursor Using Hand Gestures',
      description:
        'Computer vision project for touchless cursor control with real-time tracking at 20+ FPS and under 50ms gesture response latency.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
      impact: [
        'Real-time landmark tracking pipeline for gesture-to-cursor mapping.',
        'Supports drawing, erase, and interaction actions through tracked hand states.',
        'Built as an accessibility-first interaction experiment for hands-free control.',
      ],
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/cherry-12345/Air-Cursor-Using-Hand-Gestures',
          primary: true,
        },
      ],
      status: 'Demo Ready',
    },
    {
      id: 4,
      title: 'Music Streaming Website',
      description:
        'Music platform with lazy-loaded UI supporting 50+ tracks and under 1.5 second initial load time.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
      impact: [
        'Search and playlist interaction across 50+ tracks.',
        'Custom player controls for smoother in-page listening flow.',
        'Structured for fast static deployment on GitHub Pages/Netlify.',
      ],
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/cherry-12345/My-Music-Demo-Project',
          primary: true,
        },
      ],
      status: 'Demo Ready',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  }

  const statusClass = (status: Project['status']) => {
    if (status === 'Live') return 'border-[color:var(--color-accent-alt)] text-[color:var(--color-accent-alt)]'
    if (status === 'Demo Ready') return 'border-[color:var(--color-accent)] text-[color:var(--color-accent)]'
    return 'border-[color:var(--color-muted)] text-[color:var(--color-muted)]'
  }

  const opensInNewTab = (href: string) =>
    href.startsWith('http') || href.startsWith('/media/') || href.startsWith('/projects/')

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
          <p className="text-lg text-[color:var(--color-muted)] max-w-3xl mx-auto">
            Built projects with measurable outcomes, real media proof, and direct demo access.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {projects.map((project) => {
            const primaryLink = project.links.find((link) => link.primary) ?? project.links[0]
            const opensExternally = opensInNewTab(primaryLink.href)

            return (
              <motion.article
                key={`availability-${project.id}`}
                variants={itemVariants}
                className="studio-surface rounded-2xl p-4"
              >
                <p className="text-sm font-medium text-[color:var(--color-text)] mb-2">{project.title}</p>
                <span
                  className={`inline-flex items-center px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-mono rounded-full border ${statusClass(project.status)}`}
                >
                  {project.status}
                </span>
                <a
                  href={primaryLink.href}
                  target={opensExternally ? '_blank' : undefined}
                  rel={opensExternally ? 'noopener noreferrer' : undefined}
                  className="block mt-3 text-sm text-[color:var(--color-accent)] hover:underline"
                >
                  {primaryLink.label}
                </a>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="studio-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="flex items-start justify-between mb-5 gap-4">
                <h3 className="text-2xl font-medium text-[color:var(--color-text)]">{project.title}</h3>
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.25em] font-mono rounded-full border ${statusClass(project.status)}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-[color:var(--color-muted)] mb-5 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="font-medium text-[color:var(--color-text)] mb-3">Impact Metrics:</h4>
                <ul className="space-y-2">
                  {project.impact.map((item) => (
                    <li key={item} className="flex items-start text-sm text-[color:var(--color-muted)]">
                      <span className="w-2 h-2 bg-[color:var(--color-accent)] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-[color:var(--color-text)] mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={opensInNewTab(link.href) ? '_blank' : undefined}
                    rel={opensInNewTab(link.href) ? 'noopener noreferrer' : undefined}
                    className={link.primary ? 'btn-primary text-sm' : 'btn-outline text-sm'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-[color:var(--color-muted)] mb-6">Explore pinned repos, demos, and updated READMEs on GitHub.</p>
          <a
            href="https://github.com/cherry-12345"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            View GitHub Activity
          </a>
        </motion.div>
      </div>
    </section>
  )
}
