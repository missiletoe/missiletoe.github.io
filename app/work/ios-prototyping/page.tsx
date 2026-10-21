import { Grid2X2, Smartphone } from 'lucide-react'
import { projects } from '@/data/projects'
import { productIntros } from '@/data/product-intros'
import { ProjectLayout, ProductAvailability, ProductFaq, ProductHero, ProductImage, ProductWorkflow } from '@/components/project-layout'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  path: '/work/ios-prototyping',
  title: '찍술 | 사진으로 정리하는 나의 음주 기록',
  description: '사진에서 제품을 확인하고 실제로 마신 양을 기록해요. 찍술의 기록 방법과 iPhone 앱·앱인토스 미니앱 준비 상태를 확인하세요.',
  image: { url: '/images/zziksool-logo.png', width: 1254, height: 1254, alt: '찍술 앱 로고' },
})

export default function IosPrototypingPage() {
  const project = projects.find((item) => item.slug === 'ios-prototyping')!
  const intro = productIntros.zziksool
  return (
    <ProjectLayout project={project} intro={intro}>
      <ProductHero intro={intro} />
      <ProductWorkflow intro={intro}>
        <a href="#faq" className="product-text-link" data-analytics-step="product_manual_entry">사진 없이 직접 입력할 수도 있어요.</a>
      </ProductWorkflow>
      <section className="product-feature product-section product-container zziksool-calendar">
        <div className="product-feature__copy">
          <h2>하루씩 쌓인 기록을,<br />달력에서 다시 봐요.</h2>
          <p>날짜를 눌러 기록을 확인하고, 필요하면 수정하거나 삭제하세요.</p>
          <p>기록하지 않은 날은 미기록으로 구분해요. 비어 있는 날짜가 술을 마시지 않은 날을 뜻하지는 않아요.</p>
        </div>
        <ProductImage media={intro.hero} />
      </section>
      <ProductAvailability title="어디에서 사용할 수 있나요?">
        <p className="product-section__intro">지금은 두 플랫폼에서 준비 중이에요. 아직 공개 설치 링크는 없어요.</p>
        <dl className="product-info-list product-platforms">
          <div><dt><Smartphone size={24} strokeWidth={1.5} aria-hidden="true" />iPhone 앱</dt><dd>내부 테스트 중 · 공개 설치 링크 준비 중</dd></div>
          <div><dt><Grid2X2 size={24} strokeWidth={1.5} aria-hidden="true" />앱인토스 미니앱</dt><dd>실기기 검증과 심사·출시 준비 중</dd></div>
        </dl>
        <p className="product-availability__note">두 앱의 기록은 따로 보관되며 서로 동기화되지 않습니다.</p>
      </ProductAvailability>
      <ProductFaq intro={intro} />
    </ProjectLayout>
  )
}
