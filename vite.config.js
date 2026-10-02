import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Permite el despliegue estático en GitHub Pages bajo cualquier subruta
  plugins: [
    react(),
    tailwindcss(),
  ],
})
