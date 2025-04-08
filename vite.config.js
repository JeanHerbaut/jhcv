import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/jhcv/', // Updated base path to match the new project name
  plugins: [react()],
})
