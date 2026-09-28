import Image from 'next/image'
import type { GalleryProject } from '@/data/gallery'

interface GalleryArtworkProps {
  item: GalleryProject
  decorative?: boolean
  priority?: boolean
  sizes?: string
}

export function GalleryArtwork({ item, decorative = false, priority = false, sizes = '(max-width: 640px) 80vw, 55vw' }: GalleryArtworkProps) {
  return (
    <div className="gallery-artwork" style={{ backgroundColor: item.backdrop }}>
      <Image
        src={item.image}
        alt={decorative ? '' : item.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={item.fit === 'contain' ? 'gallery-artwork__image gallery-artwork__image--contain' : 'gallery-artwork__image'}
      />
    </div>
  )
}
