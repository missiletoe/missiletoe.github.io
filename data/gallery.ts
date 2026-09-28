export interface GalleryProject {
  slug: string
  title: string
  image: string
  icon: string
  alt: string
  accent: string
  backdrop: string
  fit?: 'contain' | 'cover'
}

export const galleryProjects: GalleryProject[] = [
  {
    slug: 'kbpm',
    title: 'KBPM',
    image: '/images/1.png',
    icon: '/images/project-icons/kbpm.webp',
    alt: '2025년 KBPM v1의 상품 검색 화면',
    accent: '#c9c6bb',
    backdrop: '#242527',
  },
  {
    slug: 'game-promotion',
    title: '메이플스토리월드 에버리프',
    image: '/images/everleaf-banner.png',
    icon: '/images/project-icons/everleaf.webp',
    alt: 'EverLeaf 공식 게임 아트워크',
    accent: '#77bded',
    backdrop: '#142231',
  },
  {
    slug: 'ios-prototyping',
    title: '찍술',
    image: '/images/zziksool-icon.png',
    icon: '/images/project-icons/zziksool.webp',
    alt: '찍술 앱 아이콘',
    accent: '#b49afe',
    backdrop: '#151449',
    fit: 'contain',
  },
]
