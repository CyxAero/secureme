import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "backend_url", // your backend URL
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
