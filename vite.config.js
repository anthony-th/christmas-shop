import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    sourcemap: true,
  },
  base: '/christmas-shop/',
});