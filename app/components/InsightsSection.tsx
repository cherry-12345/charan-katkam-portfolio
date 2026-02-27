'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { insightPosts } from '../data/insightsPosts'

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 md:py-28 bg-[color:var(--color-surface)]">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium text-[color:var(--color-text)] mb-4 tracking-tight">
            Insights
          </h2>
          <div className="w-24 h-1 bg-[color:var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[color:var(--color-muted)] max-w-3xl mx-auto">
            Technical write-ups that show build depth, tradeoff thinking, and communication clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {insightPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="studio-surface rounded-2xl p-7 shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.25em] font-mono text-[color:var(--color-muted)] mb-3">
                {post.publishedOn} | {post.readTime}
              </p>
              <h3 className="text-2xl font-medium text-[color:var(--color-text)] leading-tight mb-4">
                {post.title}
              </h3>
              <p className="text-[color:var(--color-muted)] leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="space-y-2 mb-6">
                {post.highlights.slice(0, 2).map((item) => (
                  <p key={item} className="text-sm text-[color:var(--color-muted)] flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] flex-shrink-0" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
              <Link href={`/insights/${post.slug}`} className="btn-outline text-sm inline-flex">
                Read Full Post
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/insights" className="btn-primary">
            Browse All Insights
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
