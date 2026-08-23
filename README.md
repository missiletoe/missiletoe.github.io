# Max, the Developer

A two-screen personal homepage built with Vue, Tailwind CSS, and daisyUI. The opening
screen behaves like a system-aware wallpaper; one scroll reveals a short introduction.

## Local development

\`\`\`sh
npm install
npm run dev
\`\`\`

## GitHub Pages

\`\`\`sh
npm run build
\`\`\`

The build writes generated files to \`docs/\` while preserving the existing \`docs/images/\`
and \`docs/downloads/\` folders. GitHub Pages is configured to publish \`main\` → \`/docs\` at
<https://missiletoe.github.io/KBPM/>.

The Vite base path is \`/KBPM/\`, matching the repository page URL.
