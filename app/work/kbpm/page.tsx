import Image from 'next/image'
import { projects } from '@/data/projects'
import { productIntros } from '@/data/product-intros'
import { ProjectLayout, ProductActions, ProductAvailability, ProductHero, ProductImage, ProductWorkflow } from '@/components/project-layout'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  path: '/work/kbpm',
  title: 'KBPM | KREAM 판매 작업을 한 화면에서',
  description: 'KREAM 상품 확인, 보관신청 대기열과 일반판매 가격 관리를 한곳에서. KBPM v2의 화면과 사용 흐름, 공개 배포 준비 상태를 살펴보세요.',
  image: { url: '/images/kbpm-v2-screenshot-2.png', width: 2864, height: 1924, alt: 'KREAM 브라우저와 가격 관리 패널을 함께 배치한 KBPM v2' },
})

export default function KbpmPage() {
  const project = projects.find((item) => item.slug === 'kbpm')!
  const intro = productIntros.kbpm
  return (
    <ProjectLayout project={project} intro={intro} storyChildren={
      <section>
        <h3>이전 v1 화면 · 2025년</h3>
        <div className="product-archive">
          <figure><Image src="/images/kbpm-v1-screenshot-1.png" alt="2025년 KBPM v1 상품 검색 화면" width={3104} height={2040} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>v1 · 상품 검색</figcaption></figure>
          <figure><Image src="/images/kbpm-v1-screenshot-2.png" alt="2025년 KBPM v1 보관판매 대기열" width={3104} height={2040} sizes="(max-width: 700px) 100vw, 50vw" /><figcaption>v1 · 보관판매 대기열</figcaption></figure>
        </div>
      </section>
    }>
      <ProductHero intro={intro} />
      <section id="features" className="product-feature product-section product-container">
        <ProductImage media={{ ...intro.hero, caption: '일반판매 상품의 가격 유지 대기열' }} className="kbpm-detail" />
        <div className="product-feature__copy">
          <h2>보고 있던 상품에서,<br />바로 이어서.</h2>
          <p>KREAM을 둘러보면서 원하는 상품을 확인하고, 보관신청을 위한 작업과 일반판매 가격 관리를 각각 이어갈 수 있습니다.</p>
          <p>브라우저 옆의 관리 패널에서 상품과 진행 상태를 함께 살펴보세요. 조건과 비용을 확인한 뒤 직접 시작합니다.</p>
        </div>
      </section>
      <ProductWorkflow intro={intro} />
      <ProductAvailability title="사용 전에 확인하세요.">
        <dl className="product-info-list">
          <div><dt>현재 v2는 개발 중입니다.</dt><dd>아직 공개 배포 버전이 없습니다. 실제 보관신청·결제와 가격 변경 완료, Windows 실행은 추가 확인이 필요합니다.</dd></div>
          <div><dt>KREAM 계정으로 직접 로그인합니다.</dt><dd>앱 안의 실제 KREAM 화면에서 로그인하고 상품을 확인하는 흐름입니다.</dd></div>
          <div><dt>불확실한 결과는 다시 제출하지 않습니다.</dt><dd>거래 결과를 확인할 수 없는 작업은 자동 재제출을 멈추도록 설계했습니다.</dd></div>
        </dl>
        <ProductActions actions={[{ label: '개발 소식 보기', href: 'https://max-dev.tistory.com/17', external: true }]} />
      </ProductAvailability>
    </ProjectLayout>
  )
}
