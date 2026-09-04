'use client'

import { ThemeProvider } from 'next-themes'
import { AnalyticsListener } from '@/components/analytics/analytics-listener'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AnalyticsListener />
      {children}
    </ThemeProvider>
  )
}
