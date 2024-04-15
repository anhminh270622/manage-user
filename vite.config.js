import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build'
  },
  plugins: [react(),
  TanStackRouterVite()],
})
