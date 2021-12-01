// rules that overrides extends
const RULES = {
    'react/function-component-definition': [
        'error',
        {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
        },
    ],
    'react-hooks/exhaustive-deps': [
        'warn',
        {
            additionalHooks:
                '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
        },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
}

// configration extends techno
const EXTENDS_AIRBNB_JAVASCRIPT = ['airbnb', 'airbnb/hooks']

const EXTENDS_AIRBNB_TYPESCRIPT = ['airbnb-typescript']

const EXTENDS_NEXT = ['next/core-web-vitals', 'plugin:@next/next/recommended']

const EXTENDS_PRETTIER = ['prettier']

// configuration extends file types
const EXTENDS_JAVASCRIPT = [
    ...EXTENDS_AIRBNB_JAVASCRIPT,
    ...EXTENDS_NEXT,
    ...EXTENDS_PRETTIER,
]

const EXTENDS_TYPESCRIPT = [
    ...EXTENDS_AIRBNB_JAVASCRIPT,
    ...EXTENDS_AIRBNB_TYPESCRIPT,
    ...EXTENDS_NEXT,
    ...EXTENDS_PRETTIER,
]

// overrides depending on language
const TYPESCRIPT = [
    {
        extends: EXTENDS_TYPESCRIPT,
        files: ['*.ts', '*.tsx'],
        parserOptions: {
            project: ['./tsconfig.json'],
        },
        rules: RULES,
    },
]

// configuration
module.exports = {
    extends: EXTENDS_JAVASCRIPT,
    rules: RULES,
    overrides: TYPESCRIPT,
    parser: '@typescript-eslint/parser',
}
