import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    proxy:{
      '/api': 'http://localhost:3000'

      //if we send request to /api/hello, it will be forwarded to http://localhost:3000/api/hello
    }
  }
})
