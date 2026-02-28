import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'module',
    typescript: true,
    formatters: true,
    stylistic: {
        indent: 4,
    },
    lessOpinionated: true,
    ignores: [
        '.github/workflows/*.yml',
    ],
})
