import { GalleryHome } from '@/components/gallery-home'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  path: '/',
  title: 'Max, the Software Engineer | Portfolio',
  description: '허용석의 프로젝트 갤러리. 메이플스토리월드 에버리프, KBPM, 찍술을 소개합니다.',
  image: {
    url: '/web-app-manifest-512x512.png',
    width: 512,
    height: 512,
    alt: 'Max Portfolio 사이트 아이콘',
  },
})

export default function HomePage() {
  return <GalleryHome />
}
