import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/KBPM/',
  plugins: [vue(), tailwindcss()],
  build: {
    outDir: 'docs',
    emptyOutDir: false,
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['terminal.local'],
  },
})
