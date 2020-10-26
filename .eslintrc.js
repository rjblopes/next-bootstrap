module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-unused-expressions': 0,
    'react/jsx-props-no-spreading': 0
  },
  globals: {
    React: 'writable'
  },
  ignorePatterns: ['node_modules/**', '.next/**', '.eslintrc.js'],
  settings: {
    'import/resolver': {
      alias: [
        ['@root', './'],
        ['@components', './components'],
        ['@lib', './lib'],
        ['@models', './models']
      ]
    }
  }
};
