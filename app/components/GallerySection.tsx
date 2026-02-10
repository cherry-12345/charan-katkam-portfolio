'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    {
      id: 1,
      title: 'SmartSDLC Dashboard',
      category: 'ui',
      description: 'AI-powered project management interface',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['React', 'AI', 'Dashboard']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern jewelry store interface',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Next.js', 'E-commerce', 'Responsive']
    },
    {
      id: 3,
      title: 'Hand Gesture Recognition',
      category: 'ai',
      description: 'Computer vision for air cursor control',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      tech: ['Python', 'OpenCV', 'ML']
    },
    {
      id: 4,
      title: 'Music Streaming UI',
      category: 'ui',
      description: 'Modern music player interface',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      tech: ['React', 'Audio', 'Streaming']
    },
    {
      id: 5,
      title: 'AI Workflow Diagram',
      category: 'ai',
      description: 'Machine learning pipeline visualization',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      tech: ['TensorFlow', 'Data Science', 'Visualization']
    },
    {
      id: 6,
      title: 'Code Architecture',
      category: 'web',
      description: 'Clean code structure and patterns',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop',
      tech: ['Architecture', 'Clean Code', 'Patterns']
    }
  ]

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'ui', label: 'UI Design' },
    { id: 'web', label: 'Web Dev' },
    { id: 'ai', label: 'AI/ML' }
  ]

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section id="gallery" className="py-24 md:py-28 bg-[color:var(--color-bg)]">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            Interactive Gallery
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
            Explore my work through interactive previews and detailed project insights
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-5 mb-14"
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 font-mono ${
                filter === filterItem.id
                  ? 'bg-[color:var(--color-accent)] text-white shadow-lg'
                  : 'studio-surface text-[color:var(--color-muted)] hover:border-[color:var(--color-accent)]'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative studio-surface rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="bg-[color:var(--color-surface)]/90 p-2 rounded-full backdrop-blur-sm border border-[color:var(--color-border)]">
                      <svg className="w-5 h-5 text-[color:var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium text-[color:var(--color-text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[color:var(--color-muted)] mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
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
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="studio-surface rounded-md max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const item = galleryItems.find(item => item.id === selectedImage)
                  if (!item) return null
                  
                  return (
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-96">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-medium text-[color:var(--color-text)] mb-4">
                          {item.title}
                        </h3>
                        <p className="text-[color:var(--color-muted)] mb-6">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.tech.map((tech) => (
                            <span
                              key={tech}
                              className="tag-chip"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="btn-primary"
                        >
                          Close Preview
                        </button>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}