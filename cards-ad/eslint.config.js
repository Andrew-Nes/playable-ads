import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';
import parserTs from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  prettier,

  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      import: eslintPluginImport,
      prettier: pluginPrettier,
    },

    rules: {
      ...tsPlugin.configs['recommended'].rules,

      'prettier/prettier': ['error'],
      'no-console': ['off'],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          js: 'never',
        },
      ],


      'no-use-before-define': ['off'],
      '@typescript-eslint/no-use-before-define': ['error'],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '**/*.css',
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.js'],
        },
      },
    },
  },
  {
    ignores: [
      'dist/**',
      'build/**',
      'coverage/**',
      'node_modules/**',
      '__snapshots__/**',
      '*.md',
      '.git/**',
      'eslint.config.js',
      'vite.config.ts',
      'package.json',
      'package-lock.json',
      'tsconfig.json', 
      'vitest.config.ts',
    ],
  },
];