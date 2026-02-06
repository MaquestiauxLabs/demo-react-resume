import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@helpers': '/src/helpers',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces',
      '@constants': '/src/constants',
      '@providers': '/src/providers',
    },
  },
});
