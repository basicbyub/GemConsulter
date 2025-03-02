import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "fs";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures assets are correctly referenced
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    outDir: "dist", // Ensures build output goes to the correct directory
    rollupOptions: {
      input: "index.html",
    },
  },
  configResolved() {
    // Copy sitemap.xml to the dist folder after the build
    copyFileSync(resolve(__dirname, "sitemap.xml"), resolve(__dirname, "dist/sitemap.xml"));
  },
});
