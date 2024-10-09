import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/static/",
  build: {
    // Customize the output directory
    outDir: "../backend/build", // Adjust this to your Django static directory
    emptyOutDir: true, // This will empty the directory before each build
  },
});
