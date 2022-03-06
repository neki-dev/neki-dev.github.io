module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: ['airbnb', 'airbnb-typescript'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-restricted-exports': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-max-props-per-line': [1, { "maximum": 3 }],
    'react/jsx-props-no-spreading': 'off',
  },
};
