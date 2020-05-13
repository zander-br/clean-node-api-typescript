module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript/base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/require-await': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/export': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off'
  },
};
