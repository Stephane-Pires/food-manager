module.exports = {
    '**/*.{js,jsx}': [
        (filenames) =>
            `next lint --file ${filenames
                .map((file) => file.split(process.cwd())[1])
                .join(' --file ')}`,
        'prettier --check',
    ],
    '**/*.{ts,tsx}': [
        () => 'tsc --skipLibCheck --noEmit',
        'eslint --cache',
        'prettier --check',
    ],
    '**/*.{css,md}': ['prettier --check'],
}
