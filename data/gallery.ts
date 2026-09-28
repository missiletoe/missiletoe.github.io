export interface GalleryProject {
  slug: string
  title: string
  field: string
  image: string
  alt: string
  imageNote: string
  accent: string
  backdrop: string
  overlay?: number
  fit?: 'contain' | 'cover'
}

export const galleryProjects: GalleryProject[] = [
  {
    slug: 'mcp-publishing',
    title: 'YouTube MCP',
    field: 'MCP · 콘텐츠 자동화',
    image: '/images/mcp-editorial.png',
    alt: '도구 연결을 상징하는 편집용 스튜디오 이미지',
    imageNote: '편집용 이미지',
    accent: '#ec756e',
    backdrop: '#151112',
    overlay: 0.06,
  },
  {
    slug: 'kbpm',
    title: 'KBPM',
    field: '데스크톱 · 브라우저 자동화',
    image: '/images/1.png',
    alt: '2025년 KBPM v1의 상품 검색 화면',
    imageNote: '2025년 v1 화면',
    accent: '#c9c6bb',
    backdrop: '#242527',
    overlay: 0.3,
  },
  {
    slug: 'game-promotion',
    title: 'EverLeaf',
    field: '웹사이트 · CMS',
    image: '/images/everleaf-banner.png',
    alt: 'EverLeaf 공식 웹사이트 아트워크',
    imageNote: '공식 웹사이트 아트워크',
    accent: '#77bded',
    backdrop: '#142231',
    overlay: 0.18,
  },
  {
    slug: 'ios-prototyping',
    title: '찍술',
    field: 'iOS · 앱인토스',
    image: '/images/zziksool-icon.png',
    alt: '찍술 앱 아이콘',
    imageNote: '앱 아이콘',
    accent: '#b49afe',
    backdrop: '#151449',
    overlay: 0.12,
    fit: 'contain',
  },
]
