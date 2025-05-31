module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      js: 'never',
    }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/order': ['error', {
    'groups': [
      'builtin',    
      'external',   
      'internal',   
      ['parent', 'sibling', 'index'],
      'object',     
      'type'        
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
  }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
};