import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import sassDts from 'vite-plugin-sass-dts'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
})