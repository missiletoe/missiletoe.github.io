import type { Metadata } from 'next'

export const siteUrl = 'https://missiletoe.github.io'

interface PageMetadata {
  path: string
  title: string
  description: string
  image: {
    url: string
    width: number
    height: number
    alt: string
  }
}

export function createPageMetadata({ path, title, description, image }: PageMetadata): Metadata {
  const url = new URL(path, siteUrl).href
  const images = [{ ...image, url: new URL(image.url, siteUrl).href }]

  // Next.js replaces nested metadata objects, so each page needs complete share fields.
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Max Portfolio',
      locale: 'ko_KR',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  }
}
