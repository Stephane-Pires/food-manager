module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'next/core-web-vitals',
        'prettier',
        'plugin:@next/next/recommended',
    ],
    rules: {
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'arrow-function',
            },
        ],
        'jsx-a11y/anchor-is-valid': 'off',
    },
    overrides: [
        {
            extends: [
                'airbnb',
                'airbnb/hooks',
                'airbnb-typescript',
                'next/core-web-vitals',
                'prettier',
                'plugin:@next/next/recommended',
            ],
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
            rules: {
                'react/function-component-definition': [
                    'error',
                    {
                        namedComponents: 'function-declaration',
                        unnamedComponents: 'arrow-function',
                    },
                ],
                'jsx-a11y/anchor-is-valid': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
}
