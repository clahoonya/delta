import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Configuration for Vite build tool
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});