'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

export const THEME_OPTIONS = [
  {
    key: 'system',
    label: 'System',
  },
  {
    key: 'light',
    label: 'Light',
  },
  {
    key: 'dark',
    label: 'Dark',
  },
] as const

export type ThemeMode = (typeof THEME_OPTIONS)[number]['key']

const THEME_KEY_SET = new Set<ThemeMode>(THEME_OPTIONS.map((item) => item.key))

export function getThemeMode(value: string | undefined): ThemeMode {
  if (value && THEME_KEY_SET.has(value as ThemeMode)) {
    return value as ThemeMode
  }
  return 'system'
}

export function getThemeLabel(theme: ThemeMode, resolvedTheme: string | undefined) {
  if (theme !== 'system') {
    return THEME_OPTIONS.find((option) => option.key === theme)?.label ?? theme
  }

  return `System (${resolvedTheme === 'dark' ? 'Dark' : 'Light'})`
}

export function createThemeSelectHandler(
  setThemeValue: (theme: ThemeMode) => void,
  onSelect?: (theme: ThemeMode) => void,
) {
  return (nextTheme: ThemeMode) => {
    setThemeValue(nextTheme)
    onSelect?.(nextTheme)
  }
}

/**
 * Contrast Theme Icon (Tabler contrast / half-shaded circle)
 */
export function ContrastThemeIcon({ className = 'size-4.5', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 3l0 18" />
      <path d="M12 9l4.65 -4.65" />
      <path d="M12 14.3l7.37 -7.37" />
      <path d="M12 19.6l8.85 -8.85" />
    </svg>
  )
}

interface ThemeToggleProps {
  onThemeSelect?: (theme: ThemeMode) => void
  className?: string
}

export function ThemeToggle({ onThemeSelect, className = '' }: ThemeToggleProps) {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = React.useCallback(() => {
    const nextTheme: ThemeMode = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    onThemeSelect?.(nextTheme)
  }, [resolvedTheme, setTheme, onThemeSelect])

  const buttonClasses = `inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 group/toggle extend-touch-target size-8 cursor-pointer ${className}`.trim()

  if (!mounted) {
    return (
      <button
        type="button"
        data-slot="button"
        data-variant="ghost"
        data-size="icon"
        className={buttonClasses}
        aria-label="Toggle theme"
        disabled
      >
        <ContrastThemeIcon className="size-4.5 opacity-60" />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  const currentThemeMode = getThemeMode(theme)
  const currentLabel = getThemeLabel(currentThemeMode, resolvedTheme)

  return (
    <button
      type="button"
      data-slot="button"
      data-variant="ghost"
      data-size="icon"
      className={buttonClasses}
      onClick={handleToggle}
      aria-label={`테마 모드 전환 (현재: ${currentLabel})`}
      data-analytics-step="theme_toggle"
    >
      <ContrastThemeIcon className="size-4.5 transition-transform duration-300 group-hover/toggle:rotate-45" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
