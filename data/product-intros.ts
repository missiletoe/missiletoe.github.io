import type { ProductIntroduction } from '@/lib/types'

// Public entry points are separate from development evidence and private repositories.
export const everleafLinks = {
  play: 'https://maplestoryworlds.nexon.com/ko/play/63c49d7b034c468789e4808a77d06aba',
  site: 'https://project-dol-everleaf.vercel.app/',
  guides: 'https://project-dol-everleaf.vercel.app/guides',
  data: 'https://project-dol-everleaf.vercel.app/data',
} as const

export const productIntros = {
  kbpm: {
    theme: 'kbpm',
    name: 'KBPM',
    logo: { src: '/images/project-icons/kbpm.webp', alt: 'KBPM', width: 256, height: 256 },
    headline: ['KREAM 판매 작업을,', '한 화면에서.'],
    description: '상품을 보고, 보관신청을 준비하고, 판매 가격을 관리하세요.',
    hero: {
      src: '/images/kbpm-v2-screenshot-2.png',
      alt: '실제 KREAM 판매 페이지 옆에서 가격 유지 대기열을 관리하는 KBPM v2',
      width: 2864,
      height: 1924,
      caption: 'KBPM v2 개발 화면 · KREAM 브라우저와 가격 관리 패널',
    },
    actions: [
      { label: '사용 흐름 살펴보기', href: '#workflow', primary: true },
      { label: '개발 소식', href: 'https://max-dev.tistory.com/17', external: true },
    ],
    availability: 'v2 개발 중 · 아직 공개 배포 버전이 없습니다.',
    navigation: [
      { label: '주요 기능', href: '#features' },
      { label: '사용 흐름', href: '#workflow' },
      { label: '이용 안내', href: '#availability' },
    ],
    workflow: {
      title: '시작은 직접, 진행은 한곳에서.',
      description: '상품을 대기열에 추가하는 것만으로 신청이나 판매가 진행되지는 않습니다. 필요한 조건을 검토한 뒤 직접 시작합니다.',
      steps: [
        { title: 'KREAM 로그인', description: '앱 안의 KREAM 화면에서 직접 로그인합니다.' },
        { title: '상품과 조건 확인', description: '상품과 수량, 판매 조건과 비용을 확인합니다.' },
        { title: '작업 시작', description: '보관신청 또는 가격 관리를 직접 시작하고 진행 상태를 확인합니다.' },
      ],
    },
    faq: [],
  },
  everleaf: {
    theme: 'everleaf',
    name: '에버리프',
    logo: { src: '/images/everleaf-logo.png', alt: 'EverLeaf 에버리프', width: 1672, height: 941 },
    headline: ['탐험은 익숙하게,', '전투는 카드로 새롭게.'],
    description: '필드를 탐험하고 카드를 모아, 나만의 덱으로 보스에 도전하세요.',
    hero: {
      src: '/images/everleaf-screenshot.png',
      alt: '카드를 손에 들고 주니어 발록과 마주한 에버리프의 실제 전투 화면',
      width: 2372,
      height: 1336,
    },
    actions: [
      { label: '메이플스토리 월드에서 열기', href: everleafLinks.play, external: true, primary: true },
      { label: '공식 사이트', href: everleafLinks.site, external: true },
    ],
    availability: '메이플스토리 월드에서 플레이하는 크리에이터 게임입니다.',
    navigation: [
      { label: '게임 소개', href: '#game' },
      { label: '플레이 방법', href: '#workflow' },
      { label: '가이드', href: '#guides' },
    ],
    workflow: {
      title: '모험의 흐름은 간단해요.',
      steps: [
        { title: '탐험하기', description: '필드를 탐험하며 몬스터를 만나고 숨겨진 보상을 찾아보세요.' },
        { title: '카드 고르기', description: '상황에 맞는 카드를 선택해 나만의 전략을 만들어보세요.' },
        { title: '턴 마치기', description: '적의 다음 행동을 살피고 공격과 방어를 골라 턴을 마무리하세요.' },
      ],
    },
    faq: [],
  },
  zziksool: {
    theme: 'zziksool',
    name: '찍술',
    logo: { src: '/images/ZzikSoolHeaderLogo-light@3x.png', alt: '찍술', width: 336, height: 144 },
    headline: ['술자리 사진으로,', '어제의 기록을 정리해요.'],
    description: '무엇을 마셨는지 확인하고, 실제로 마신 양을 남겨보세요.',
    hero: {
      src: '/images/zziksool-screenshot.png',
      alt: '날짜별 음주 기록을 확인하는 찍술 앱인토스 미니앱의 캘린더',
      width: 1320,
      height: 2723,
      caption: '앱인토스 개발 화면',
    },
    actions: [
      { label: '기록 방법 살펴보기', href: '#workflow', primary: true },
      { label: '이용 안내', href: '#availability' },
    ],
    availability: 'iPhone 앱·앱인토스 미니앱 준비 중 · 공개 설치 링크는 아직 없습니다.',
    navigation: [
      { label: '기록 방법', href: '#workflow' },
      { label: '이용 안내', href: '#availability' },
      { label: '자주 묻는 질문', href: '#faq' },
    ],
    workflow: {
      title: '사진을 골라도,\n기록은 확인한 뒤에.',
      description: '사진 속 병의 수가 내가 마신 양은 아니니까요. 실제로 마신 양은 직접 확인해요.',
      steps: [
        { title: '사진 선택', description: '술자리에서 찍은 사진을 선택해요.' },
        { title: '제품과 마신 양 확인', description: '제품 후보를 확인하고, 내가 실제로 마신 양을 입력해요.' },
        { title: '기록 저장', description: '확인한 내용으로 하루의 기록을 저장해요.' },
      ],
    },
    faq: [
      { question: '사진이 없어도 기록할 수 있나요?', answer: '네. 직접 입력으로 제품과 실제로 마신 양을 확인한 뒤 기록할 수 있어요.' },
      { question: '마신 양을 자동으로 알 수 있나요?', answer: '사진만으로 내가 마신 양을 확정할 수는 없어요. 사진에서 찾은 제품 후보를 확인하고, 실제로 마신 양은 직접 입력한 뒤 저장해요.' },
      { question: '지금 설치할 수 있나요?', answer: '아직 공개 설치 링크는 없어요. iPhone 앱은 내부 테스트 단계이며, 앱인토스 미니앱은 실기기 검증과 심사·출시를 준비하고 있어요.' },
      { question: 'iPhone 앱과 미니앱의 기록이 연결되나요?', answer: '두 앱은 별도로 기록을 보관해요. 현재 두 앱 사이의 기록 동기화는 제공하지 않아요.' },
    ],
  },
} satisfies Record<string, ProductIntroduction>
