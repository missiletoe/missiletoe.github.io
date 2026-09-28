import { ArrowUpRight } from 'lucide-react'
import type { ProjectEvidence } from '@/lib/types'

interface EvidenceListProps {
  items: ProjectEvidence[]
}

export function EvidenceList({ items }: EvidenceListProps) {
  const links = items.filter((item) => item.href)
  if (links.length === 0) return null

  return (
    <div className="mt-7">
      <p className="text-xs text-muted-foreground">관련 링크</p>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center gap-1 text-sm text-foreground underline-offset-4 hover:underline"
            aria-label={item.label + ' (새 창에서 열림)'}
            data-analytics-step="evidence_link"
          >
            {item.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}
