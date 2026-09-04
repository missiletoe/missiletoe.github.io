import { TechChoice } from '@/lib/types'
import { TechIcon } from '@/components/icons'

interface TechTableProps {
  items: TechChoice[]
}

export function TechTable({ items }: TechTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border bg-card">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border bg-muted/60 text-sm font-bold text-foreground">
          <tr>
            <th scope="col" className="px-4 py-3.5 font-mono">
              기술
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold">
              선택 이유 및 적용 위치
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold">
              실제 겪은 제약 및 배운 점
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-sm">
          {items.map((tech) => (
            <tr key={tech.name} className="hover:bg-muted/20 transition-colors">
              <td className="px-4 py-3.5 font-mono font-semibold text-foreground whitespace-nowrap align-top">
                <div className="flex items-center gap-2">
                  <TechIcon name={tech.name} className="h-4 w-4 shrink-0 text-foreground" />
                  <span>{tech.name}</span>
                </div>
              </td>
              <td className="px-4 py-3.5 text-foreground/90 align-top text-sm leading-relaxed">
                {tech.reason}
              </td>
              <td className="px-4 py-3.5 text-foreground/75 align-top text-sm leading-relaxed">
                {tech.constraintOrLearning || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
