import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app'
import {
  getAnalytics,
  isSupported,
  logEvent,
  type Analytics,
} from 'firebase/analytics'

export type JourneyStepType = 'page' | 'section' | 'internal_nav' | 'outbound_click'

interface JourneyStepParams {
  step_type: JourneyStepType
  step_name: string
  from?: string
  to: string
  journey_id: string
}

interface OutboundClickParams {
  link_url: string
  link_domain: string
  link_label: string
  target_blank: boolean
}

interface ActiveSecondsParams {
  seconds: number
  path: string
  route: string
}

interface BaseEnv {
  NEXT_PUBLIC_ANALYTICS_ENABLED?: string
  NEXT_PUBLIC_FIREBASE_API_KEY?: string
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?: string
  NEXT_PUBLIC_FIREBASE_PROJECT_ID?: string
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?: string
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?: string
  NEXT_PUBLIC_FIREBASE_APP_ID?: string
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?: string
}

type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>

const JOURNEY_ID_KEY = 'portfolio_journey_id'

const analyticsEnabledEnv = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED

function isAnalyticsEnabledByEnv(): boolean {
  const lower = analyticsEnabledEnv?.toLowerCase()
  return lower === '1' || lower === 'true' || lower === 'yes' || lower === 'on'
}

function getFirebaseConfig(): FirebaseOptions | null {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID

  if (!apiKey || !projectId) {
    return null
  }

  return {
    apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  }
}

interface WindowWithGtag {
  gtag?: (...args: Array<Record<string, unknown> | string | undefined>) => void
}

let analyticsInstance: Analytics | null = null
let initPromise: Promise<Analytics | null> | null = null

function hasWindow(): boolean {
  return typeof window !== 'undefined'
}

function sanitizeAnalyticsParams(params: AnalyticsEventParams): Record<string, string | number | boolean> {
  const sanitized: Record<string, string | number | boolean> = {}

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return
    }

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      sanitized[key] = value
    }
  })

  return sanitized
}

function isAnalyticsDebugEnabled(): boolean {
  if (!hasWindow()) return false
  const query = new URLSearchParams(window.location.search)
  const debug = query.get('firebase_debug')
  return debug === '1' || debug === 'true'
}

function getJourneyIdStorageSafe(): string | null {
  if (!hasWindow()) return null

  try {
    const existing = window.sessionStorage.getItem(JOURNEY_ID_KEY)
    if (existing) return existing
  } catch {
    return null
  }

  return null
}

export function getJourneyId(): string {
  if (!hasWindow()) return 'server-side'

  const existing = getJourneyIdStorageSafe()
  if (existing) return existing

  const generated = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 11)}`

  try {
    window.sessionStorage.setItem(JOURNEY_ID_KEY, generated)
  } catch {
    // If sessionStorage is unavailable, continue with memory-only ID.
  }

  return generated
}

export function isAnalyticsEnabled(): boolean {
  return hasWindow() && isAnalyticsEnabledByEnv() && Boolean(getFirebaseConfig())
}

async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (!isAnalyticsEnabled()) return null
  if (analyticsInstance) return analyticsInstance

  if (initPromise) return initPromise

  initPromise = (async () => {
    if (!(await isSupported())) return null

    const config = getFirebaseConfig()
    if (!config) return null

    const app = getApps().length ? getApp() : initializeApp(config)
    const analytics = getAnalytics(app)

    const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    const windowWithGtag = window as WindowWithGtag

    if (measurementId && typeof windowWithGtag.gtag === 'function') {
      windowWithGtag.gtag('config', measurementId, { send_page_view: false })

      if (isAnalyticsDebugEnabled()) {
        windowWithGtag.gtag('config', measurementId, { debug_mode: true })
      }
    }

    analyticsInstance = analytics
    return analytics
  })()

  return initPromise
}

async function trackEvent(eventName: string, params: AnalyticsEventParams = {}): Promise<void> {
  if (!isAnalyticsEnabled()) return

  const analytics = await getAnalyticsInstance()
  if (!analytics) return

  const sanitizedParams = sanitizeAnalyticsParams(params)

  try {
    logEvent(analytics, eventName, sanitizedParams)
  } catch {
    // no-op to avoid analytics failure affecting user interaction flow
  }
}

export async function trackPageView(): Promise<void> {
  if (!hasWindow() || !isAnalyticsEnabled()) return

  await trackEvent('page_view', {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
    page_referrer: document.referrer || undefined,
  })
}

export async function trackStep(params: JourneyStepParams): Promise<void> {
  await trackEvent('portfolio_journey_step', {
    step_type: params.step_type,
    step_name: params.step_name,
    from: params.from,
    to: params.to,
    journey_id: params.journey_id,
  })
}

export async function trackOutboundClick(params: OutboundClickParams): Promise<void> {
  await trackEvent('portfolio_outbound_click', {
    link_url: params.link_url,
    link_domain: params.link_domain,
    link_label: params.link_label,
    target_blank: params.target_blank,
  })
}

export async function trackActiveSeconds(params: ActiveSecondsParams): Promise<void> {
  await trackEvent('portfolio_active_seconds', {
    seconds: params.seconds,
    path: params.path,
    route: params.route,
  })
}

export { JOURNEY_ID_KEY }
