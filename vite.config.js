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
          notfound: resolve(root, '404.html'),
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
        { find: "@scss", replacement: resolve(root, "assets/styles") },
        { find: "@img", replacement: resolve(root, "assets/images") },
        { find: "@icons", replacement: resolve(root, "assets/icons") },
        { find: "@page", replacement: resolve(root, "components/views") },
        { find: "@lay", replacement: resolve(root, "components/layouts") },
        { find: "@route", replacement: resolve(root, "components/router") },
        { find: "@sections", replacement: resolve(root, "components/sections") },
        { find: "@data", replacement: resolve(root, "data") },
        { find: "@common", replacement: resolve(root, "components/common") },
        { find: "@helpers", replacement: resolve(root, "helpers") },
      ],
    }, 
  };
});
