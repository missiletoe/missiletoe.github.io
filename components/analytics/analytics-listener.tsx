'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import {
  isAnalyticsEnabled,
  getJourneyId,
  trackPageView,
  trackStep,
  trackOutboundClick,
  trackActiveSeconds,
} from '@/lib/analytics/firebase'

const HEARTBEAT_INTERVAL_SECONDS = 60

export function AnalyticsListener() {
  const pathname = usePathname()
  const lastPathRef = React.useRef<string | null>(null)
  const activeSecondsCounterRef = React.useRef<number>(0)

  // 1. Page View & Route Transition Tracking
  React.useEffect(() => {
    if (!isAnalyticsEnabled()) return

    const journeyId = getJourneyId()
    const previousPath = lastPathRef.current

    // Send page_view for current route
    trackPageView()

    // Send journey_step for page transition
    const stepName = pathname === '/' ? 'home' : pathname.replace(/^\//, '').replace(/\//g, '_')
    trackStep({
      step_type: 'page',
      step_name: stepName,
      from: previousPath || undefined,
      to: pathname,
      journey_id: journeyId,
    })

    lastPathRef.current = pathname
  }, [pathname])

  // 2. Hash Change (Section Anchor) Tracking
  React.useEffect(() => {
    if (!isAnalyticsEnabled()) return

    function handleHashChange() {
      const hash = window.location.hash
      if (!hash) return

      const journeyId = getJourneyId()
      const sectionName = hash.replace(/^#/, '')

      trackStep({
        step_type: 'section',
        step_name: sectionName,
        from: pathname,
        to: `${pathname}${hash}`,
        journey_id: journeyId,
      })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname])

  // 3. Click Delegation for Links and CTA Steps
  React.useEffect(() => {
    if (!isAnalyticsEnabled()) return

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest('a')
      if (!anchor || !anchor.href) return

      const href = anchor.getAttribute('href') || ''
      const stepAttr = anchor.getAttribute('data-analytics-step')
      const journeyId = getJourneyId()
      const label =
        anchor.getAttribute('aria-label') ||
        anchor.textContent?.trim() ||
        anchor.href

      const isExternal =
        (anchor.protocol === 'http:' || anchor.protocol === 'https:') &&
        anchor.hostname !== window.location.hostname

      if (isExternal) {
        trackOutboundClick({
          link_url: anchor.href,
          link_domain: anchor.hostname,
          link_label: label,
          target_blank: anchor.target === '_blank',
        })

        trackStep({
          step_type: 'outbound_click',
          step_name: stepAttr || `outbound_${anchor.hostname}`,
          from: pathname,
          to: anchor.href,
          journey_id: journeyId,
        })
      } else if (stepAttr) {
        trackStep({
          step_type: 'internal_nav',
          step_name: stepAttr,
          from: pathname,
          to: href,
          journey_id: journeyId,
        })
      }
    }

    document.addEventListener('click', handleClick, { capture: true })
    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
    }
  }, [pathname])

  // 4. Focus/Visibility-Aware Active Seconds Heartbeat
  React.useEffect(() => {
    if (!isAnalyticsEnabled()) return

    const intervalId = window.setInterval(() => {
      const isVisible = document.visibilityState === 'visible'
      const hasFocus = document.hasFocus()

      if (isVisible && hasFocus) {
        activeSecondsCounterRef.current += 1

        if (activeSecondsCounterRef.current >= HEARTBEAT_INTERVAL_SECONDS) {
          trackActiveSeconds({
            seconds: HEARTBEAT_INTERVAL_SECONDS,
            path: pathname,
            route: pathname,
          })
          activeSecondsCounterRef.current = 0
        }
      }
    }, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [pathname])

  return null
}
