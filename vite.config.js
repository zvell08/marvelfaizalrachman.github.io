import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // <--- Tambahkan baris ini!
  ],
  base: '/marvelfaizalrachman.github.io/',
})