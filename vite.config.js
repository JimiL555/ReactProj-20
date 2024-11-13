// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows you to use '@' as an alias for the 'src' folder, if you want
      '@': '/src'
    },
  },
});