import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/enam/', // Replace with your actual GitHub repository name
  build: {
    outDir: 'docs', // Change from 'dist' to 'docs'
  },
});
