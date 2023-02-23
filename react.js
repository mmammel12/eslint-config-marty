module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
    extends: [
        'airbnb',
        'prettier',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:jest-dom/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:testing-library/react',
    ],
    rules: {
        'prettier/prettier': 'error',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-await-in-loop': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
    },
};
