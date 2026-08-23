import { rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const generatedTargets = [
  new URL('../docs/assets/', import.meta.url),
  new URL('../docs/index.html', import.meta.url),
  new URL('../docs/.nojekyll', import.meta.url),
]

for (const target of generatedTargets) {
  await rm(fileURLToPath(target), { force: true, recursive: true })
}
