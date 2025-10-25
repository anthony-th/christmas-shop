import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';

const filesJs = ['src/**/*.js'];

const languageOptions = {
  globals: globals.browser,
  ecmaVersion: 'latest',
  sourceType: 'module',
};

const mainConfig = {
  files: filesJs,
  plugins: {
    prettier,
    perfectionist,
  },
  languageOptions,
  rules: {
    'prettier/prettier': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
  },
};

export default [
  {
    ignores: [
      'build/*', 'dist/*'
    ]
  },
  js.configs.recommended,
  mainConfig,
  configPrettier
];
