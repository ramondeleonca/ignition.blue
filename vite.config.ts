import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { imagetools } from "vite-imagetools";
import viteImagemin from 'vite-plugin-imagemin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    "alias": {
      "@": "/src",
    }
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    // imagetools(),
    // viteImagemin({
    //   webp: { }
    // }),
    ViteImageOptimizer({
      jpg: { quality: 75 },
      jpeg: { quality: 75 },
      png: { quality: 75 },
    })
  ],
})
