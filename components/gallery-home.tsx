import Image from 'next/image'
import Link from 'next/link'
import { GalleryArtwork } from '@/components/gallery-artwork'
import { galleryProjects } from '@/data/gallery'

export function GalleryHome() {
  return (
    <div className="gallery-home">
      <h1 className="sr-only">프로젝트</h1>
      {galleryProjects.map((item, index) => (
        <section className="gallery-section" key={item.slug} aria-labelledby={item.slug + '-title'}>
          <Link
            href={'/work/' + item.slug}
            className="gallery-project"
            data-project={item.slug}
            aria-label={item.title + ' 자세히 보기'}
          >
            <div className="gallery-project__preview">
              <GalleryArtwork item={item} decorative priority={index === 0} sizes="(max-width: 700px) 90vw, 960px" />
            </div>
            <div className="gallery-project__identity">
              <Image src={item.icon} alt="" width={64} height={64} className="gallery-project__icon" />
              <h2 id={item.slug + '-title'}>{item.title}</h2>
            </div>
          </Link>
        </section>
      ))}
    </div>
  )
}
