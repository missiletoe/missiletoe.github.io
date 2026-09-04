import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
  className?: string
}

// ----------------------------------------------------------------------
// 1. Company & Platform Monochrome Icons (Black & White Tone)
// ----------------------------------------------------------------------

/**
 * GitHub monochrome brand icon
 */
export function GithubIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

/**
 * LinkedIn monochrome brand icon
 */
export function LinkedinIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export interface TistoryIconProps extends IconProps {
  /**
   * Presentation variant:
   * - 'symbol' / 'dots' (default): Official 5-dot T-symbol mark (Simple Icons standard)
   * - 'badge' / 'circle': Enclosed circular badge with 5 cutout dots matching tistory.com favicon
   */
  variant?: 'dots' | 'symbol' | 'badge' | 'circle'
}

/**
 * Tistory monochrome brand icon
 * Accurately represents the official brand identity on https://tistory.com/
 * consisting of 5 circular dots forming a 'T' shape (3 along top bar, 2 down the stem).
 */
export function TistoryIcon({
  variant = 'symbol',
  className = 'h-4 w-4',
  ...props
}: TistoryIconProps) {
  if (variant === 'circle' || variant === 'badge') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.26 6.083a1.304 1.304 0 1 0 0 2.609 1.304 1.304 0 0 0 0-2.609zm-4.174 0a1.304 1.304 0 1 0 0 2.609 1.304 1.304 0 0 0 0-2.609zm8.348 0a1.304 1.304 0 1 0 0 2.609 1.304 1.304 0 0 0 0-2.609zm-4.174 4.174a1.304 1.304 0 1 0 0 2.609 1.304 1.304 0 0 0 0-2.609zm0 4.174a1.304 1.304 0 1 0 0 2.609 1.304 1.304 0 0 0 0-2.609z"
        />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Official 5-dot Tistory Brand Identity mark ('T' configuration) */}
      <path d="M0 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </svg>
  )
}

/**
 * YouTube monochrome brand icon
 */
export function YoutubeIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M21.58 7.19a2.76 2.76 0 0 0-1.95-1.95C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.63.49a2.76 2.76 0 0 0-1.95 1.95A28.84 28.84 0 0 0 2 12a28.84 28.84 0 0 0 .42 4.81 2.76 2.76 0 0 0 1.95 1.95c1.73.49 7.63.49 7.63.49s5.9 0 7.63-.49a2.76 2.76 0 0 0 1.95-1.95A28.84 28.84 0 0 0 22 12a28.84 28.84 0 0 0-.42-4.81zM10 15.5V8.5l6 3.5-6 3.5z" />
    </svg>
  )
}

/**
 * Apple monochrome brand icon
 */
export function AppleIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.65-.79 1.1-1.89.98-2.99-.95.04-2.1.63-2.78 1.42-.59.68-1.12 1.79-.98 2.87 1.07.08 2.15-.55 2.78-1.3z" />
    </svg>
  )
}

// ----------------------------------------------------------------------
// 2. Tech Stack Monochrome Icons (Black & White Tone)
// ----------------------------------------------------------------------

/**
 * Python monochrome icon
 */
export function PythonIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M11.91 2c-3.1 0-5.11.38-5.11 2.29v2.29h5.16v.76H4.25C2.39 7.34 2 9.3 2 11.89c0 2.72.63 4.54 2.25 4.54h1.36v-2.07c0-2.34 2.05-2.34 3.73-2.34h3.69v-.76H7.95V8.12h7.32c1.86 0 3.23-1.42 3.23-3.83C18.5 2.14 16.2 2 11.91 2zm-1.85 1.52a.76.76 0 1 1 0 1.52.76.76 0 0 1 0-1.52zM12.09 22c3.1 0 5.11-.38 5.11-2.29v-2.29h-5.16v-.76h7.71c1.86 0 2.25-1.96 2.25-4.55 0-2.72-.63-4.54-2.25-4.54h-1.36v2.07c0 2.34-2.05 2.34-3.73 2.34H10.98v.76h5.08v3.14H8.74c-1.86 0-3.23 1.42-3.23 3.83 0 2.15 2.3 2.29 6.58 2.29zm1.85-1.52a.76.76 0 1 1 0-1.52.76.76 0 0 1 0 1.52z" />
    </svg>
  )
}

/**
 * Selenium / Browser Testing monochrome icon
 */
export function SeleniumIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M7 8h10" />
      <path d="M7 12h5" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
      <path d="M7 16h8" />
    </svg>
  )
}

/**
 * Swift / SwiftUI monochrome icon
 */
export function SwiftIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M20.9 14.8c-.1-.1-.3-.3-.5-.4.1-.1.2-.2.3-.4-1.9 2-4.5 3.3-7.5 3.4 3-1.6 5.2-4.4 6-7.8-.5.4-1.1.7-1.8 1-2.4 1.3-4.8 1.4-7.4.5-2.2-.8-4-2.3-5.3-4.3C4.1 6 3.6 5.1 3.2 4.1c-.1-.2-.2-.2-.3 0-.1.5-.1 1-.1 1.5 0 5 3.2 9.2 7.7 10.7-1.4.1-2.7-.2-4-.8.5 1.1 1.3 2.1 2.3 2.9 2.5 1.9 5.8 2.4 8.8 1.4 1.3-.4 2.5-1.1 3.5-2 .1-.1 0-.1-.2 0z" />
    </svg>
  )
}

/**
 * TypeScript monochrome icon
 */
export function TypescriptIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M6 10h6m-3 0v7" />
      <path d="M15 11.5c0-.8.7-1.5 1.5-1.5h1.5v3h-2c-.5 0-1 .5-1 1v1.5c0 .8.7 1.5 1.5 1.5h2" />
    </svg>
  )
}

/**
 * Node.js monochrome icon
 */
export function NodejsIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
      <path d="M12 12v10" />
      <path d="M12 12l8.5-5" />
      <path d="M12 12L3.5 7" />
    </svg>
  )
}

/**
 * Next.js monochrome icon
 */
export function NextjsIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.87 13.62L9.2 7.82h1.5l5.52 7.02zm.63-2.62h-1.3V8.8h1.3z" />
    </svg>
  )
}

/**
 * Tailwind CSS monochrome icon
 */
export function TailwindIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  )
}

/**
 * GitHub Actions monochrome icon
 */
export function GithubActionsIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
    </svg>
  )
}

/**
 * Claude / MCP / AI Agent monochrome icon
 */
export function ClaudeIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2.5l2.2 6.3 6.3 2.2-6.3 2.2L12 19.5l-2.2-6.3-6.3-2.2 6.3-2.2L12 2.5z" />
      <circle cx="19" cy="5" r="1.5" />
      <circle cx="5" cy="19" r="1.5" />
    </svg>
  )
}

/**
 * Markdown monochrome icon
 */
export function MarkdownIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M6 15V9l3 3 3-3v6" />
      <path d="M16 11l2 2 2-2" />
      <path d="M18 9v6" />
    </svg>
  )
}

/**
 * Premiere Pro / Video Editing monochrome icon
 */
export function PremiereIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M8 8v8" />
      <path d="M8 8h3a2 2 0 0 1 2 2 2 2 0 0 1-2 2H8" />
      <path d="M15 12v4" />
      <path d="M15 13a1.5 1.5 0 0 1 2-1" />
    </svg>
  )
}

/**
 * Figma / UI Design monochrome icon
 */
export function FigmaIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M8 2h4v4H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2zm4 4h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-4V6zm-4 4h4v4H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2zm4 4h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-4v-4zm-4 4h4v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2z" />
    </svg>
  )
}

/**
 * Xcode / Apple Build Tooling monochrome icon
 */
export function XcodeIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

/**
 * Database / CoreData / SwiftData monochrome icon
 */
export function DatabaseIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

/**
 * Windows / WinUI 3 monochrome icon
 */
export function WindowsIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M3 4.5L10.5 3.5V11.25H3V4.5ZM3 12.75H10.5V20.5L3 19.5V12.75ZM11.75 3.3L21 2V11.25H11.75V3.3ZM11.75 12.75H21V22L11.75 20.7V12.75Z" />
    </svg>
  )
}

/**
 * Package / uv / PyInstaller packaging icon
 */
export function PackageIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.29 7 12 12.01 20.71 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  )
}

/**
 * Default / Code terminal monochrome fallback icon
 */
export function DefaultTechIcon({ className = 'h-4 w-4', ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

// ----------------------------------------------------------------------
// 3. Intelligent Matchers (TechIcon & CompanyIcon)
// ----------------------------------------------------------------------

export interface TechIconProps extends IconProps {
  name: string
}

/**
 * Intelligently returns the appropriate monochrome tech icon based on tech name
 */
export function TechIcon({ name, className = 'h-4 w-4', ...props }: TechIconProps) {
  const normalized = name.toLowerCase()

  if (normalized.includes('python')) {
    return <PythonIcon className={className} {...props} />
  }
  if (normalized.includes('selenium') || normalized.includes('chrome')) {
    return <SeleniumIcon className={className} {...props} />
  }
  if (normalized.includes('swift')) {
    return <SwiftIcon className={className} {...props} />
  }
  if (normalized.includes('typescript')) {
    return <TypescriptIcon className={className} {...props} />
  }
  if (normalized.includes('node')) {
    return <NodejsIcon className={className} {...props} />
  }
  if (normalized.includes('next')) {
    return <NextjsIcon className={className} {...props} />
  }
  if (normalized.includes('tailwind')) {
    return <TailwindIcon className={className} {...props} />
  }
  if (normalized.includes('action') || normalized.includes('workflow')) {
    return <GithubActionsIcon className={className} {...props} />
  }
  if (normalized.includes('mcp') || normalized.includes('claude') || normalized.includes('ai')) {
    return <ClaudeIcon className={className} {...props} />
  }
  if (normalized.includes('youtube')) {
    return <YoutubeIcon className={className} {...props} />
  }
  if (normalized.includes('markdown') || normalized.includes('frontmatter')) {
    return <MarkdownIcon className={className} {...props} />
  }
  if (normalized.includes('premiere') || normalized.includes('video') || normalized.includes('effects')) {
    return <PremiereIcon className={className} {...props} />
  }
  if (normalized.includes('figma') || normalized.includes('photoshop')) {
    return <FigmaIcon className={className} {...props} />
  }
  if (normalized.includes('apple vision') || normalized.includes('photos') || normalized.includes('appintent')) {
    return <AppleIcon className={className} {...props} />
  }
  if (normalized.includes('coredata') || normalized.includes('swiftdata') || normalized.includes('data')) {
    return <DatabaseIcon className={className} {...props} />
  }
  if (normalized.includes('xcode')) {
    return <XcodeIcon className={className} {...props} />
  }
  if (normalized.includes('pyinstaller') || normalized.includes('uv') || normalized.includes('packaging')) {
    return <PackageIcon className={className} {...props} />
  }
  if (normalized.includes('winui') || normalized.includes('windows')) {
    return <WindowsIcon className={className} {...props} />
  }
  if (normalized.includes('github')) {
    return <GithubIcon className={className} {...props} />
  }

  return <DefaultTechIcon className={className} {...props} />
}

export interface CompanyIconProps extends IconProps {
  name: 'github' | 'linkedin' | 'tistory' | 'youtube' | 'apple' | string
}

/**
 * Returns monochrome company brand icon
 */
export function CompanyIcon({ name, className = 'h-4 w-4', ...props }: CompanyIconProps) {
  const normalized = name.toLowerCase()

  if (normalized.includes('github')) {
    return <GithubIcon className={className} {...props} />
  }
  if (normalized.includes('linkedin')) {
    return <LinkedinIcon className={className} {...props} />
  }
  if (normalized.includes('tistory')) {
    return <TistoryIcon className={className} {...props} />
  }
  if (normalized.includes('youtube')) {
    return <YoutubeIcon className={className} {...props} />
  }
  if (normalized.includes('apple')) {
    return <AppleIcon className={className} {...props} />
  }

  return <DefaultTechIcon className={className} {...props} />
}
