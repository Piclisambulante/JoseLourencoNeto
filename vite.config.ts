import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'portifolio-f88e.onrender.com' 
    ]
  }
})
