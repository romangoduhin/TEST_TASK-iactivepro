import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@api": `${path.resolve(__dirname, "./src/services/api")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@helpers": `${path.resolve(__dirname, "./src/utils/helpers")}`,
      "@templates": `${path.resolve(__dirname, "./src/templates/")}`,
      "@images": `${path.resolve(__dirname, "./src/assets/images")}`,
      "@variables": `${path.resolve(__dirname, "./src/assets/variables/variables.scss")}`,
    }
  }
})
