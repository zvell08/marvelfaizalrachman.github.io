import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue()],
  // Sesuaikan dengan nama repository kamu di GitHub nantinya:
  base: '/marvelfaizalrachman.github.io/', 
})