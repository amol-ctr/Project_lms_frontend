// vite.config.js
import { defineConfig } from "file:///C:/Users/amolm/Dropbox/projects_web_dev/project_lms/frontend/node_modules/vite/dist/node/index.js";
import { vitePlugin as remix } from "file:///C:/Users/amolm/Dropbox/projects_web_dev/project_lms/frontend/node_modules/@remix-run/dev/dist/index.js";
import react from "file:///C:/Users/amolm/Dropbox/projects_web_dev/project_lms/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      // '/api':'https://quizapi.io/api/v1/questions?apiKey=m7TMi2dtJEa2PDYyLcParKsXe6ZLSPyfp5cSzRDe&limit=10',
      // '/api': {
      //   target: 'https://quizapi.io/api/v1/questions?apiKey=m7TMi2dtJEa2PDYyLcParKsXe6ZLSPyfp5cSzRDe&limit=10', // API server 1
      //   changeOrigin: true,
      //   // rewrite: (path) => path.replace(/^\/api/, '/api'), // Optionally rewrite the path
      // },
      "/api2": {
        target: "http://localhost:3000",
        // API server 2
        // target: 'https://project-lms-backend.onrender.com', // API server 2
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api2/, '/api2/person'), // Optionally rewrite the path
      }
      // '/apis':"http://localhost:3000"       
    }
  },
  // optimizeDeps: { esbuildOptions: { target: "esnext" } }, // <-- Set this to resolve issue.
  plugins: [react()],
  build: {
    target: "esnext"
    // Targets modern browsers that support top-level await
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbW9sbVxcXFxEcm9wYm94XFxcXHByb2plY3RzX3dlYl9kZXZcXFxccHJvamVjdF9sbXNcXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFtb2xtXFxcXERyb3Bib3hcXFxccHJvamVjdHNfd2ViX2RldlxcXFxwcm9qZWN0X2xtc1xcXFxmcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYW1vbG0vRHJvcGJveC9wcm9qZWN0c193ZWJfZGV2L3Byb2plY3RfbG1zL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHZpdGVQbHVnaW4gYXMgcmVtaXggfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXZcIjtcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgIC8vICcvYXBpJzonaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnM/YXBpS2V5PW03VE1pMmR0SkVhMlBEWXlMY1BhcktzWGU2WkxTUHlmcDVjU3pSRGUmbGltaXQ9MTAnLFxuICAgICAgLy8gJy9hcGknOiB7XG4gICAgICAvLyAgIHRhcmdldDogJ2h0dHBzOi8vcXVpemFwaS5pby9hcGkvdjEvcXVlc3Rpb25zP2FwaUtleT1tN1RNaTJkdEpFYTJQRFl5TGNQYXJLc1hlNlpMU1B5ZnA1Y1N6UkRlJmxpbWl0PTEwJywgLy8gQVBJIHNlcnZlciAxXG4gICAgICAvLyAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIC8vICAgLy8gcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcvYXBpJyksIC8vIE9wdGlvbmFsbHkgcmV3cml0ZSB0aGUgcGF0aFxuICAgICAgLy8gfSxcbiAgICAgICcvYXBpMic6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJywgLy8gQVBJIHNlcnZlciAyXG4gICAgICAgIC8vIHRhcmdldDogJ2h0dHBzOi8vcHJvamVjdC1sbXMtYmFja2VuZC5vbnJlbmRlci5jb20nLCAvLyBBUEkgc2VydmVyIDJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAvLyByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpMi8sICcvYXBpMi9wZXJzb24nKSwgLy8gT3B0aW9uYWxseSByZXdyaXRlIHRoZSBwYXRoXG4gICAgICB9LFxuICAgICAgLy8gJy9hcGlzJzpcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiICAgICAgIFxuICAgIH0sXG4gIH0sXG4gIC8vIG9wdGltaXplRGVwczogeyBlc2J1aWxkT3B0aW9uczogeyB0YXJnZXQ6IFwiZXNuZXh0XCIgfSB9LCAvLyA8LS0gU2V0IHRoaXMgdG8gcmVzb2x2ZSBpc3N1ZS5cbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDoge1xuICAgIHRhcmdldDogXCJlc25leHRcIlxuICAgIC8vIFRhcmdldHMgbW9kZXJuIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0b3AtbGV2ZWwgYXdhaXRcbiAgfVxuICBcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9YLFNBQVMsb0JBQW9CO0FBQ2paLFNBQVMsY0FBYyxhQUFhO0FBQ3BDLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUUxQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPTCxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUE7QUFBQTtBQUFBLFFBRVIsY0FBYztBQUFBO0FBQUEsTUFFaEI7QUFBQTtBQUFBLElBRUY7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxFQUVWO0FBRUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
