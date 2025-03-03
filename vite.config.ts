import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/enam/', // Replace with your actual GitHub repository name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
});
