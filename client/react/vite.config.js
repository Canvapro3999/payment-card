import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  envDir: "../",
  envPrefix: "PAYPAL",
 
  server: {
     allowedHosts: [
      '5cd2-154-192-182-209.ngrok-free.app' 
    ],
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})