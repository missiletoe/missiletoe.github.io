import React from 'react'
import Image from 'next/image'
import { ExternalLink, GitBranch, FileText, ShieldCheck } from 'lucide-react'
import { ProjectEvidence } from '@/lib/types'
import { GithubIcon, TistoryIcon } from '@/components/icons'

interface EvidenceListProps {
  items: ProjectEvidence[]
}

export function EvidenceList({ items }: EvidenceListProps) {
  const validItems = items.filter((item) => Boolean(item.href || item.image))

  if (validItems.length === 0) return null

  return (
    <div className="flex flex-col gap-3 my-6">
      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        검증 가능한 증거 자료
      </h4>
      <div className="flex flex-wrap gap-3">
        {validItems.map((evidence, idx) => {
          if (evidence.href) {
            const isGithub = evidence.href.includes('github.com')
            const isTistory = evidence.href.includes('tistory.com')

            return (
              <a
                key={idx}
                href={evidence.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:border-foreground/30 transition-all focus-visible:rounded"
                aria-label={`${evidence.label} (새 창에서 열림)`}
                data-analytics-step="evidence_link"
              >
                {isGithub ? (
                  <GithubIcon className="h-4 w-4 text-foreground/80 shrink-0" />
                ) : isTistory ? (
                  <TistoryIcon className="h-4 w-4 text-foreground/80 shrink-0" />
                ) : evidence.type === 'repository' ? (
                  <GitBranch className="h-4 w-4 text-foreground/80 shrink-0" />
                ) : (
                  <FileText className="h-4 w-4 text-foreground/80 shrink-0" />
                )}
                <span>{evidence.label}</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground ml-0.5 shrink-0" />
              </a>
            )
          }

          if (evidence.image) {
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-md border border-border bg-card p-3.5 max-w-sm"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded bg-muted">
                  <Image
                    src={evidence.image}
                    alt={evidence.caption || evidence.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {evidence.label}
                </p>
                {evidence.caption && (
                  <p className="text-xs text-muted-foreground">
                    {evidence.caption}
                  </p>
                )}
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
