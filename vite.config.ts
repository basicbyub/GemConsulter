import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures assets are correctly referenced
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: "dist", // Ensures build output goes to the correct directory
    rollupOptions: {
      input: "index.html",
    },
  },
});
