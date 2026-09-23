'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Monitor, Moon, Sun } from 'lucide-react'

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
        aria-label="테마 변경"
        disabled
      >
        <Monitor className="h-4 w-4 opacity-60" aria-hidden="true" />
        <span className="sr-only">테마 변경</span>
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
      aria-label={`${resolvedTheme === 'dark' ? '라이트' : '다크'} 모드로 변경 (현재: ${currentLabel})`}
      title={`${resolvedTheme === 'dark' ? '라이트' : '다크'} 모드로 변경`}
      data-analytics-step="theme_toggle"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-4 w-4 transition-transform duration-300 group-hover/toggle:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 group-hover/toggle:-rotate-12" aria-hidden="true" />
      )}
      <span className="sr-only">테마 변경</span>
    </button>
  )
}
