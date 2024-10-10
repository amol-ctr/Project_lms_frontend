// vite.config.js
import { defineConfig } from "file:///C:/Users/amolm/Dropbox/projects_web_dev/project_lms/frontend/node_modules/vite/dist/node/index.js";
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
        // target: 'http://localhost:3000', // API server 2
        target: "https://project-lms-backend.onrender.com",
        // API server 2
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api2/, '/api2/person'), // Optionally rewrite the path
      }
      // '/apis':"http://localhost:3000"       
    }
  },
  // optimizeDeps: { esbuildOptions: { target: "esnext" } }, // <-- Set this to resolve issue.
  // plugins: [react(), remix(), tsconfigPaths()],
  plugins: [react()],
  // build: {
  //   target: "esnext"
  //   // Targets modern browsers that support top-level await
  // }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbW9sbVxcXFxEcm9wYm94XFxcXHByb2plY3RzX3dlYl9kZXZcXFxccHJvamVjdF9sbXNcXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFtb2xtXFxcXERyb3Bib3hcXFxccHJvamVjdHNfd2ViX2RldlxcXFxwcm9qZWN0X2xtc1xcXFxmcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYW1vbG0vRHJvcGJveC9wcm9qZWN0c193ZWJfZGV2L3Byb2plY3RfbG1zL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgIC8vICcvYXBpJzonaHR0cHM6Ly9xdWl6YXBpLmlvL2FwaS92MS9xdWVzdGlvbnM/YXBpS2V5PW03VE1pMmR0SkVhMlBEWXlMY1BhcktzWGU2WkxTUHlmcDVjU3pSRGUmbGltaXQ9MTAnLFxuICAgICAgLy8gJy9hcGknOiB7XG4gICAgICAvLyAgIHRhcmdldDogJ2h0dHBzOi8vcXVpemFwaS5pby9hcGkvdjEvcXVlc3Rpb25zP2FwaUtleT1tN1RNaTJkdEpFYTJQRFl5TGNQYXJLc1hlNlpMU1B5ZnA1Y1N6UkRlJmxpbWl0PTEwJywgLy8gQVBJIHNlcnZlciAxXG4gICAgICAvLyAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIC8vICAgLy8gcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcvYXBpJyksIC8vIE9wdGlvbmFsbHkgcmV3cml0ZSB0aGUgcGF0aFxuICAgICAgLy8gfSxcbiAgICAgICcvYXBpMic6IHtcbiAgICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJywgLy8gQVBJIHNlcnZlciAyXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vcHJvamVjdC1sbXMtYmFja2VuZC5vbnJlbmRlci5jb20nLCAvLyBBUEkgc2VydmVyIDJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAvLyByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpMi8sICcvYXBpMi9wZXJzb24nKSwgLy8gT3B0aW9uYWxseSByZXdyaXRlIHRoZSBwYXRoXG4gICAgICB9LFxuICAgICAgLy8gJy9hcGlzJzpcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiICAgICAgIFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLCAgLy8gVGFyZ2V0cyBtb2Rlcm4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IHRvcC1sZXZlbCBhd2FpdFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1gsU0FBUyxvQkFBb0I7QUFDalosT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBRTFCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9MLFNBQVM7QUFBQTtBQUFBLFFBRVAsUUFBUTtBQUFBO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxNQUVoQjtBQUFBO0FBQUEsSUFFRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
