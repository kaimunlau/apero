import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://www.thecocktaildb.com",
    }
  } ,
  plugins: [react()],
  base: '/apero'
})
