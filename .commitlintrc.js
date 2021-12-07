module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': [
            2,
            'always',
            [
                'project',
                'dev-tooling',
                'library',
                'landing page',
                'graphql',
                'database',
                'assets',
                'food book',
            ],
        ],
    },
}
