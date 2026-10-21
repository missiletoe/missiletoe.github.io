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

export type ProductTheme = 'kbpm' | 'everleaf' | 'zziksool'

export interface ProductMedia {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export interface ProductAction {
  label: string
  href: string
  external?: boolean
  primary?: boolean
}

export interface ProductIntroduction {
  theme: ProductTheme
  name: string
  logo: ProductMedia
  headline: [string, string]
  description: string
  hero: ProductMedia
  actions: ProductAction[]
  availability: string
  navigation: { label: string; href: string }[]
  workflow: {
    title: string
    description?: string
    steps: { title: string; description: string }[]
  }
  faq: { question: string; answer: string }[]
}

export interface Project {
  slug: string
  title: string
  shortTitle: string
  period: string
  status: ProjectStatus
  statusLabel: string
  category: string
  preview: string
  summary: string
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
}
