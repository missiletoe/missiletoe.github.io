export function Footer() {
  return (
    <footer id="contact" className="w-full scroll-mt-24 border-t border-border py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold text-foreground">허용석</p>
          <p>AI Engineer</p>
        </div>
        <nav aria-label="외부 프로필" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="https://github.com/missiletoe" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline" data-analytics-step="footer_github">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/yong-suk-heo/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline" data-analytics-step="footer_linkedin">
            LinkedIn ↗
          </a>
          <a href="https://max-dev.tistory.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline" data-analytics-step="footer_tistory">
            Blog ↗
          </a>
        </nav>
      </div>
    </footer>
  )
}
