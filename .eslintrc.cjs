// .eslintrc.cjs
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^node:'],
          ['^react', '^@?\\w'],
          ['^@pages/', '^@shared/'],
          ['^\\u0000'],
          ['^\\.'],
          ['^.+\\.css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
