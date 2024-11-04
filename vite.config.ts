import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import * as path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./src/root"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@employee": path.resolve(__dirname, "./src/employee"),
      "@employer": path.resolve(__dirname, "./src/employer"),
      "@icons": path.resolve(__dirname, "./public/icons"),
    },
  },
  plugins: [svgr(), react()],
})
