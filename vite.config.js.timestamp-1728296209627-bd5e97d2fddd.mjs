// vite.config.js
import { defineConfig } from "file:///C:/Users/amolm/Dropbox/projects_web_dev/project_lms/lms/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/amolm/Dropbox/projects_web_dev/project_lms/lms/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      // '/api':'https://quizapi.io/api/v1/questions?apiKey=m7TMi2dtJEa2PDYyLcParKsXe6ZLSPyfp5cSzRDe&limit=10',
      "/api": {
        target: "https://quizapi.io/api/v1/questions?apiKey=m7TMi2dtJEa2PDYyLcParKsXe6ZLSPyfp5cSzRDe&limit=10",
        // API server 1
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '/api'), // Optionally rewrite the path
      },
      "/apis": {
        target: "http://localhost:3000",
        // API server 2
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, "/apis/person")
        // Optionally rewrite the path
      }
      // '/apis':"http://localhost:3000"       
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbW9sbVxcXFxEcm9wYm94XFxcXHByb2plY3RzX3dlYl9kZXZcXFxccHJvamVjdF9sbXNcXFxcbG1zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbW9sbVxcXFxEcm9wYm94XFxcXHByb2plY3RzX3dlYl9kZXZcXFxccHJvamVjdF9sbXNcXFxcbG1zXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hbW9sbS9Ecm9wYm94L3Byb2plY3RzX3dlYl9kZXYvcHJvamVjdF9sbXMvbG1zL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAvLyAnL2FwaSc6J2h0dHBzOi8vcXVpemFwaS5pby9hcGkvdjEvcXVlc3Rpb25zP2FwaUtleT1tN1RNaTJkdEpFYTJQRFl5TGNQYXJLc1hlNlpMU1B5ZnA1Y1N6UkRlJmxpbWl0PTEwJyxcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwczovL3F1aXphcGkuaW8vYXBpL3YxL3F1ZXN0aW9ucz9hcGlLZXk9bTdUTWkyZHRKRWEyUERZeUxjUGFyS3NYZTZaTFNQeWZwNWNTelJEZSZsaW1pdD0xMCcsIC8vIEFQSSBzZXJ2ZXIgMVxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIC8vIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnL2FwaScpLCAvLyBPcHRpb25hbGx5IHJld3JpdGUgdGhlIHBhdGhcbiAgICAgIH0sXG4gICAgICAnL2FwaXMnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsIC8vIEFQSSBzZXJ2ZXIgMlxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGlzLywgJy9hcGlzL3BlcnNvbicpLCAvLyBPcHRpb25hbGx5IHJld3JpdGUgdGhlIHBhdGhcbiAgICAgIH0sXG4gICAgICAvLyAnL2FwaXMnOlwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIgICAgICAgXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCldLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVcsU0FBUyxvQkFBb0I7QUFDbFksT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBLE1BRUwsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxNQUVoQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsV0FBVyxjQUFjO0FBQUE7QUFBQSxNQUMzRDtBQUFBO0FBQUEsSUFFRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
