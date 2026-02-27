import type { Metadata } from 'next'
import Link from 'next/link'
import { insightPosts } from '../data/insightsPosts'

export const metadata: Metadata = {
  title: 'Insights | Charan Katkam',
  description:
    'Engineering notes on SmartSDLC, e-commerce performance, and computer-vision interaction design.',
}

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)] pt-28 pb-24">
      <section className="container-max section-padding mb-16">
        <p className="text-xs uppercase tracking-[0.25em] font-mono text-[color:var(--color-accent)] mb-4">
          Charan Katkam
        </p>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-5">
          Insights
        </h1>
        <p className="text-lg text-[color:var(--color-muted)] max-w-3xl leading-relaxed">
          Short write-ups on real project decisions, tradeoffs, and measurable outcomes across AI and full-stack builds.
        </p>
      </section>

      <section className="container-max section-padding grid gap-7">
        {insightPosts.map((post) => (
          <article key={post.slug} className="studio-surface rounded-md p-7 shadow-lg">
            <p className="text-xs uppercase tracking-[0.25em] font-mono text-[color:var(--color-muted)] mb-3">
              {post.publishedOn} | {post.readTime}
            </p>
            <h2 className="text-3xl font-medium tracking-tight mb-3">{post.title}</h2>
            <p className="text-[color:var(--color-muted)] leading-relaxed mb-5">{post.excerpt}</p>
            <div className="space-y-2 mb-6">
              {post.highlights.map((item) => (
                <p key={item} className="text-sm text-[color:var(--color-muted)] flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] flex-shrink-0" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <Link href={`/insights/${post.slug}`} className="btn-primary text-sm inline-flex">
              Read Full Article
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
