import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      port: 8080,
      host: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#root': resolve(__dirname),
      },
    },
  };

  if (command !== 'serve') {
    config.base = '/museum-main/';
  }

  return config;
});
