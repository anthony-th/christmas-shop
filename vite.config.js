import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    root,
    plugins: [],
    base: command === 'serve' ? './' : '/christmas-shop/',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          gifts: resolve(root, 'gifts.html'),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    server: {
      historyApiFallback: true,
    },
    resolve: {
      alias: [
        { find: "@com", replacement: resolve(root, "components") },
        { find: "@scss", replacement: resolve(root, "assets/styles") },
        { find: "@img", replacement: resolve(root, "assets/images") },
      ],
    }, 
  };
});
