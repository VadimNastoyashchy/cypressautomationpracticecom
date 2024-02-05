module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['plugin:cypress/recommended', 'eslint:recommended'],
  ignorePatterns: ['node_modules/', 'reports/'],
  rules: {
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'no-trailing-spaces': 'error',
    semi: [2, 'always'],
  }
};
