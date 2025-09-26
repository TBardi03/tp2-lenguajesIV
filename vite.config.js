import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tp3-lenguajesIV/", // 👈 importante: nombre EXACTO del repo en GitHub
});
