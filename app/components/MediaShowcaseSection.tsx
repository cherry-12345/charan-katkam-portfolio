'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const mediaItems = [
  {
    id: 'smartsdlc',
    title: 'SmartSDLC Gradio UI',
    description:
      'Real screenshot captured from SmartSDLC while running Gradio modules for AI-assisted requirement analysis and code support.',
    image: '/projects/smartsdlc.png',
    tags: ['Gradio UI', 'Requirement Classification', 'AI Assistant'],
    links: [
      {
        label: 'Open Repo',
        href: 'https://github.com/cherry-12345/SmartSDLC-AI-Enhanced-Software-Development-Lifecycle',
      },
      {
        label: 'Live Demo Video',
        href: 'https://drive.google.com/file/d/1Mz0vxiBIaC5eYsgmS9didfk1GCYbItHp/view',
      },
    ],
  },
  {
    id: 'abhi-jewels',
    title: 'Abhi Jewels Product Page',
    description:
      'Live screenshot from the production product listing page, including filters, SKU cards, pricing, and category breakdown.',
    image: '/projects/abhi-jewels.png',
    tags: ['Live Store', 'Product Filters', 'E-commerce'],
    links: [
      {
        label: 'Open Live Site',
        href: 'https://abhi-jewels.vercel.app',
      },
      {
        label: 'Open Repo',
        href: 'https://github.com/cherry-12345/Abhi-Jewels',
      },
    ],
  },
  {
    id: 'air-cursor',
    title: 'Air Cursor Gesture Tracking',
    description:
      'In-action frame showing real MediaPipe hand landmarks and cursor mapping overlay used for touchless pointer control.',
    image: '/projects/air-cursor.gif',
    tags: ['OpenCV', 'MediaPipe', 'Cursor Mapping'],
    links: [
      {
        label: 'Open Repo',
        href: 'https://github.com/cherry-12345/Air-Cursor-Using-Hand-Gestures',
      },
    ],
  },
]

export default function MediaShowcaseSection() {
  return (
    <section id="media" className="py-24 md:py-28 bg-[color:var(--color-surface)]">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            Real Product Media
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-3xl mx-auto">
            Replaced stock visuals with project-authentic screenshots and a working SmartSDLC demo clip.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="studio-surface rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority={item.id === 'smartsdlc'}
                />
                <div className="absolute top-3 left-3 px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-mono rounded-full border border-[color:var(--color-accent-alt)] text-[color:var(--color-accent-alt)] bg-[color:var(--color-surface)]/90">
                  Real Capture
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-medium text-[color:var(--color-text)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
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
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-14 studio-surface rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <h3 className="text-2xl md:text-3xl font-medium text-[color:var(--color-text)]">
              SmartSDLC Short Demo Video
            </h3>
            <a
              href="https://drive.google.com/file/d/1Mz0vxiBIaC5eYsgmS9didfk1GCYbItHp/view"
              className="btn-primary text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Live Demo Video
            </a>
          </div>
          <video
            controls
            preload="metadata"
            poster="/projects/smartsdlc.png"
            className="w-full rounded-2xl border border-[color:var(--color-border)]"
          >
            <source src="/media/smartsdlc-demo-short.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  )
}
