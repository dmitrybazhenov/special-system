import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // На Vercel сайт живёт в корне домена, поэтому base = '/'
  // На GitHub Pages сайт живёт в подпапке /special-system/, поэтому base = '/special-system/'
  // Vercel автоматически задаёт переменную окружения VERCEL при сборке
  base: process.env.VERCEL ? '/' : '/special-system/',
})