import type { Metadata } from 'next'

const posts = [
  {
    title: 'How I Built SmartSDLC with IBM Granite AI',
    date: 'May 2025',
    summary: 'A walkthrough of automating SDLC phases using Gradio and Hugging Face workflows.',
    slug: 'smartsdlc-ibm-granite',
  },
  {
    title: 'Building a Full E-Commerce Platform from Scratch',
    date: '2024',
    summary: 'How I designed the cart, integrated Razorpay, and handled JWT-authenticated order flow.',
    slug: 'abhi-jewels-ecommerce',
  },
]

export const metadata: Metadata = {
  title: 'Blog | Charan Katkam',
  description: 'Build notes and engineering write-ups from AI and full-stack projects.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)] pt-28 pb-24">
      <section className="container-max section-padding mb-12">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-5">Blog</h1>
        <p className="text-lg text-[color:var(--color-muted)] max-w-3xl leading-relaxed">
          Technical notes on how I build, measure, and ship AI-powered web products.
        </p>
      </section>

      <section className="container-max section-padding grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="studio-surface rounded-md p-7 shadow-lg">
            <p className="text-xs uppercase tracking-[0.25em] font-mono text-[color:var(--color-muted)] mb-3">
              {post.date}
            </p>
            <h2 className="text-3xl font-medium tracking-tight mb-3">{post.title}</h2>
            <p className="text-[color:var(--color-muted)] leading-relaxed mb-6">{post.summary}</p>
            <p className="text-sm text-[color:var(--color-accent)] font-mono">Slug: {post.slug}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
