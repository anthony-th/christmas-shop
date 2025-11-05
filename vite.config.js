import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    root,
    plugins: [
      checker({
        eslint: {
          useFlatConfig: true,
          lintCommand: `eslint "**/*.js"`,
        },
        stylelint: {
          lintCommand: 'stylelint "**/*.scss"',
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
        { find: '@app', replacement: resolve(root, 'app') },
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
