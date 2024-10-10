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
        target: 'https://project-lms-backend.onrender.com', // API server 2
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api2/, '/api2/person'), // Optionally rewrite the path
      },
      // '/apis':"http://localhost:3000"       
    },
  },
  optimizeDeps: { esbuildOptions: { target: "esnext" } }, // <-- Set this to resolve issue.
  plugins: [react(), remix(), tsconfigPaths()],
  
})
