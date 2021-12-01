module.exports = {
    '**/*.{js,jsx}': (filenames) =>
        `next lint --file ${filenames
            .map((file) => file.split(process.cwd())[1])
            .join(' --file ')}`,
    '**/*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --cache'],
}
