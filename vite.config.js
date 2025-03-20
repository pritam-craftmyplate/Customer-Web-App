import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["aws-amplify"],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies:"generateSW",
      devOptions: {
        enabled: false, // Enables SW in development mode
      },
      manifest: {
        name: 'CMP_OMS App',
        short_name: 'OMS App',
        description: 'A Progressive Web App built with Vite and React',
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        theme_color:"#fff",
        background_color:"#0000",
        start_url:"/home",
        display:"standalone",
        orientation:"portrait"
      },
      workbox: {
        cleanupOutdatedCaches:true
      },
    })
  ],
  server: {
    proxy: {
      "/api": {
       // target: "https://hgc06pjf1l.execute-api.ap-south-1.amazonaws.com/dev",
        changeOrigin: true,
       // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    host: "localhost", // Use 'localhost' for local development
    port: 5173, // Port number for the dev server
    strictPort: true, // Fail if the port is in use
    open: true, // Automatically open the browser
  },
});