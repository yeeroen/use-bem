import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'module',
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
        indent: 4,
    },
    lessOpinionated: true,
})
