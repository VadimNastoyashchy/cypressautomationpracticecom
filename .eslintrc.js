module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:cypress/recommended', 'eslint:recommended'],
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
