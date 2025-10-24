import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    root,
    plugins: [
      checker({
        eslint: {
          useFlatConfig: true,
          lintCommand: `eslint "${resolve(__dirname, 'src')}/**/*.{js,mjs,cjs}"`,
        },
      }),
    ],
    base: command === 'serve' ? './' : '/christmas-shop/',
    build: {
      sourcemap: true,
      outDir: resolve(__dirname, 'dist/christmas-shop/'),
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
      devSourcemap: true,
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
        { find: '@scss', replacement: resolve(root, 'assets/styles') },
        { find: '@img', replacement: resolve(root, 'assets/images') },
        { find: '@icons', replacement: resolve(root, 'assets/icons') },
        { find: '@views', replacement: resolve(root, 'components/views') },
        { find: '@lay', replacement: resolve(root, 'components/layouts') },
        { find: '@route', replacement: resolve(root, 'components/router') },
        { find: '@sections', replacement: resolve(root, 'components/sections') },
        { find: '@data', replacement: resolve(root, 'data') },
        { find: '@common', replacement: resolve(root, 'components/common') },
        { find: '@helpers', replacement: resolve(root, 'helpers') },
      ],
    },
  };
});
