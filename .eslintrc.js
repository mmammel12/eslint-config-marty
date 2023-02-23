module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
    extends: ['airbnb', 'prettier', 'plugin:import/recommended', 'plugin:prettier/recommended', 'next/core-web-vitals'],
    rules: {
        'prettier/prettier': 'error',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-await-in-loop': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
    },
};
