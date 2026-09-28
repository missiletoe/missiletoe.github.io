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
    image: '/images/kbpm-v1-screenshot-1.png',
    icon: '/images/project-icons/kbpm.webp',
    alt: '2025년 KBPM v1의 상품 검색 화면',
    accent: '#c9c6bb',
    backdrop: '#242527',
  },
  {
    slug: 'game-promotion',
    title: '메이플스토리월드 에버리프',
    image: '/images/everleaf-screenshot.png',
    icon: '/images/project-icons/everleaf.webp',
    alt: '메이플스토리월드 에버리프의 카드 전투 화면',
    accent: '#77bded',
    backdrop: '#142231',
  },
  {
    slug: 'ios-prototyping',
    title: '찍술',
    image: '/images/zziksool-screenshot.png',
    icon: '/images/project-icons/zziksool.webp',
    alt: '찍술 앱인토스 미니앱의 캘린더와 음주 기록 화면',
    accent: '#b49afe',
    backdrop: '#ffffff',
    fit: 'contain',
  },
]
