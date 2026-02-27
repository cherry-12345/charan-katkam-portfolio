import type { MetadataRoute } from 'next'
import { insightPosts } from './data/insightsPosts'

const siteUrl = 'https://charan-katkam-portfolio.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const insightRoutes: MetadataRoute.Sitemap = insightPosts.map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    lastModified: new Date(post.publishedOn),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...insightRoutes]
}
