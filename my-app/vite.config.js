import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@api": `${path.resolve(__dirname, "./src/services/api")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@helpers": `${path.resolve(__dirname, "./src/utils/helpers")}`,
      "@hooks": `${path.resolve(__dirname, "./src/utils/hooks")}`,
      "@templates": `${path.resolve(__dirname, "./src/templates/")}`,
      "@images": `${path.resolve(__dirname, "./src/assets/images")}`,
      "@icons": `${path.resolve(__dirname, "./src/assets/icons")}`,
      "@variables": `${path.resolve(__dirname, "./src/assets/variables/variables.scss")}`,
    }
  }
})
