import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 flex flex-col items-center justify-center text-center gap-6">
      <div className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        404 Not Found
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground font-mono">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-sm text-muted-foreground max-w-md">
        요청하신 페이지가 존재하지 않거나 경로가 변경되었습니다. 홈 화면에서 전체 프로젝트 목록을 확인하실 수 있습니다.
      </p>
      <Button
        asChild
        variant="outline"
        size="icon"
        className="mt-2"
        aria-label="홈으로 돌아가기"
        data-analytics-step="not_found_home"
      >
        <Link href="/" className="flex items-center justify-center">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">홈으로 돌아가기</span>
        </Link>
      </Button>
    </div>
  )
}
