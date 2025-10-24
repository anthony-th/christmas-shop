import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default defineConfig([
  js.configs.recommended,
  configPrettier,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { prettier },
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
]);
