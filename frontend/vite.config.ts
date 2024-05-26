import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      common: `${path.resolve(__dirname, "./src/common/")}`,
      modules: path.resolve(__dirname, "./src/modules"),
      types: `${path.resolve(__dirname, "./src/types")}`,
      assets: `${path.resolve(__dirname, "./src/assets")}`,
    },
  },
})
