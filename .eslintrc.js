module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    semi: 0,
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'off',
    // 'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-deprecated': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'no-underscore-dangle': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  ignorePatterns: ['.eslintrc.js'],
}
