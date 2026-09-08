export type ProjectStatus = 'shipped' | 'ongoing' | 'planned' | 'experiment'

export type EvidenceType =
  | 'repository'
  | 'release'
  | 'article'
  | 'video'
  | 'image'
  | 'pull-request'
  | 'demo'

export interface ProjectEvidence {
  type: EvidenceType
  label: string
  href?: string
  image?: string
  caption?: string
  verified?: boolean
}

export interface TechChoice {
  name: string
  reason: string
  constraintOrLearning?: string
}

export interface Project {
  slug: string
  title: string
  shortTitle: string
  period: string
  status: ProjectStatus
  statusLabel: string
  category: string
  summary: string
  heroKicker: string
  role: string[]
  collaboration?: string[]
  context: string[]
  constraints: string[]
  decisions: string[]
  outputs: string[]
  limitations: string[]
  nextSteps: string[]
  stack: TechChoice[]
  evidence: ProjectEvidence[]
  recentUpdate?: {
    date: string
    summary: string
  }
  diagram?: {
    title?: string
    beforeTitle?: string
    before: string[]
    afterTitle?: string
    after: string[]
    humanGateNote?: string
  }
}
