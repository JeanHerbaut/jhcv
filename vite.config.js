import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-project/', // Ensure the base path is correct for GitHub Pages
  plugins: [react()],
})
