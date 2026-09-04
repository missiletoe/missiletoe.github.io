import React from 'react'
import { ArrowRight, ArrowDown, CheckCircle2, ShieldAlert } from 'lucide-react'

interface FlowDiagramProps {
  title?: string
  beforeTitle?: string
  before: string[]
  afterTitle?: string
  after: string[]
  humanGateNote?: string
}

export function FlowDiagram({
  title,
  beforeTitle = '자동화 이전 (수동 반복 방식)',
  before,
  afterTitle = '자동화 이후 (MCP 파이프라인)',
  after,
  humanGateNote,
}: FlowDiagramProps) {
  return (
    <div className="my-8 rounded-lg border border-border bg-card p-6 flex flex-col gap-6">
      {title && (
        <h4 className="text-lg font-bold text-foreground tracking-tight">
          {title}
        </h4>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before Flow */}
        <div className="flex flex-col gap-3 rounded-md border border-border/70 bg-muted/30 p-5">
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wider">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500/70" />
            {beforeTitle}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {before.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="rounded border border-border/60 bg-background px-3.5 py-2.5 text-sm text-foreground/90 flex items-start gap-2.5">
                  <span className="font-mono font-semibold text-muted-foreground shrink-0">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
                {idx < before.length - 1 && (
                  <div className="flex justify-center text-muted-foreground/50 py-0.5">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* After Flow */}
        <div className="flex flex-col gap-3 rounded-md border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 p-5">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {afterTitle}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {after.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="rounded border border-emerald-500/20 bg-background px-3.5 py-2.5 text-sm text-foreground font-medium flex items-start gap-2.5">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold shrink-0">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
                {idx < after.length - 1 && (
                  <div className="flex justify-center text-emerald-600/50 dark:text-emerald-400/50 py-0.5">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {humanGateNote && (
        <div className="flex items-start gap-2.5 rounded-md border border-border bg-muted/40 p-3.5 text-sm text-foreground/80">
          <ShieldAlert className="h-4 w-4 shrink-0 text-foreground/70 mt-0.5" />
          <span>{humanGateNote}</span>
        </div>
      )}
    </div>
  )
}
