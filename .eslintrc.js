module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:@next/next/recommended', 'eslint:recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/jsx-props-no-spreading': 'off',
    },
};
