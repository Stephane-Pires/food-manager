module.exports = {
    '**/*.{js,jsx}': (filenames) =>
        `next lint --fix --file ${filenames
            .map((file) => file.split(process.cwd())[1])
            .join(' --file ')}`,
    '**/*.{ts,tsx}': [
        () => 'tsc --skipLibCheck --noEmit',
        'eslint --cache --fix',
    ],
}
