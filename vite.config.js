import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      // '/api':'https://quizapi.io/api/v1/questions?apiKey=m7TMi2dtJEa2PDYyLcParKsXe6ZLSPyfp5cSzRDe&limit=10',
      // '/api': {
      //   target: 'https://quizapi.io/api/v1/questions?apiKey=m7TMi2dtJEa2PDYyLcParKsXe6ZLSPyfp5cSzRDe&limit=10', // API server 1
      //   changeOrigin: true,
      //   // rewrite: (path) => path.replace(/^\/api/, '/api'), // Optionally rewrite the path
      // },
      '/api2': {
        // target: 'http://localhost:3000', // API server 2
        target: 'https://project-lms-backend.vercel.app', // API server 2
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api2/, '/api2/person'), // Optionally rewrite the path
      },
      // '/apis':"http://localhost:3000"       
    },
  },
  plugins: [react()],
  build: {
    target: 'esnext',  // Targets modern browsers that support top-level await
  },
})
