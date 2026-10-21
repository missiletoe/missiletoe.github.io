import { ArrowUpRight, BookOpen, LibraryBig } from 'lucide-react'
import { projects } from '@/data/projects'
import { everleafLinks, productIntros } from '@/data/product-intros'
import { ProjectLayout, ProductActions, ProductAvailability, ProductHero, ProductImage, ProductWorkflow } from '@/components/project-layout'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  path: '/work/game-promotion',
  title: '에버리프 | 탐험과 카드 전투가 만나는 모험',
  description: '메이플스토리 월드에서 만나는 덱빌딩 로그라이트. 필드를 탐험하고 카드를 모아 나만의 덱으로 보스에 도전하세요.',
  image: { url: '/images/everleaf-logo.png', width: 1672, height: 941, alt: '메이플스토리 월드 에버리프 로고' },
})

export default function GamePromotionPage() {
  const project = projects.find((item) => item.slug === 'game-promotion')!
  const intro = productIntros.everleaf
  return (
    <ProjectLayout project={project} intro={intro}>
      <ProductHero intro={intro} />
      <section id="game" className="everleaf-battle product-section">
        <div className="product-container product-feature">
          <div className="product-feature__copy">
            <h2>적을 만나면,<br /><span>손에 든 카드로.</span></h2>
            <p>필드를 걷다 적을 만나면 내 턴이 시작됩니다. 적의 다음 행동과 남은 MP를 살피고, 공격과 방어를 골라 턴을 마무리하세요.</p>
            <p>전투에서 얻은 카드로 덱을 채우며 다음 상대와 보스에 도전해보세요.</p>
          </div>
          <ProductImage media={{ ...intro.hero, caption: '에버리프 실제 플레이 화면 · 손에 든 카드로 다음 행동을 선택합니다.' }} className="everleaf-cards" />
        </div>
      </section>
      <ProductWorkflow intro={intro} />
      <ProductAvailability id="guides" title="모험을 시작할 준비가 됐다면.">
        <p className="product-section__intro">메이플스토리 월드의 에버리프 페이지에서 게임을 열고, 현재 플레이 정보를 확인하세요.</p>
        <ProductActions actions={[intro.actions[0]]} />
        <div className="product-resources">
          <a href={everleafLinks.guides} target="_blank" rel="noopener noreferrer" aria-label="처음 시작하는 분을 위한 가이드 (새 창에서 열림)" data-analytics-step="product_guide">
            <BookOpen size={30} strokeWidth={1.5} aria-hidden="true" />
            <div><h3>처음 시작하는 분을 위한 가이드</h3><p>기본 규칙과 플레이 방법을 확인하세요.</p></div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href={everleafLinks.data} target="_blank" rel="noopener noreferrer" aria-label="카드와 몬스터 도감 (새 창에서 열림)" data-analytics-step="product_compendium">
            <LibraryBig size={30} strokeWidth={1.5} aria-hidden="true" />
            <div><h3>카드와 몬스터 도감</h3><p>모험에서 만날 카드와 몬스터를 살펴보세요.</p></div>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </ProductAvailability>
    </ProjectLayout>
  )
}
