import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5173, // Ensures your dev server is running on the correct port
    open: true, // Automatically opens the browser
  },
  build: {
    outDir: "dist", // Production build output directory
  },
  resolve: {
    alias: {
      "@": "/src", // Shorthand for imports
    },
  },
});
