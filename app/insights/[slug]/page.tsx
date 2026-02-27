import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { insightPostBySlug, insightPosts } from '../../data/insightsPosts'

type InsightPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: InsightPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = insightPostBySlug(slug)

  if (!post) {
    return {
      title: 'Insight Not Found | Charan Katkam',
    }
  }

  return {
    title: `${post.title} | Charan Katkam`,
    description: post.excerpt,
  }
}

export default async function InsightPostPage({ params }: InsightPostPageProps) {
  const { slug } = await params
  const post = insightPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)] pt-28 pb-24">
      <article className="container-max section-padding max-w-4xl">
        <Link href="/insights" className="text-sm font-mono text-[color:var(--color-accent)] hover:underline">
          Back to Insights
        </Link>

        <p className="text-xs uppercase tracking-[0.25em] font-mono text-[color:var(--color-muted)] mt-8 mb-4">
          {post.publishedOn} | {post.readTime}
        </p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">{post.title}</h1>
        <p className="text-lg text-[color:var(--color-muted)] leading-relaxed mb-10">{post.excerpt}</p>

        <div className="studio-surface rounded-md p-6 mb-10">
          <h2 className="text-sm uppercase tracking-[0.25em] font-mono text-[color:var(--color-muted)] mb-4">
            Key Takeaways
          </h2>
          <ul className="space-y-3">
            {post.highlights.map((item) => (
              <li key={item} className="text-[color:var(--color-muted)] flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-[color:var(--color-muted)] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  )
}
