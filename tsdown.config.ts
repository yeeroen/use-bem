import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: './index.ts',
    format: 'esm',
    minify: true,
    sourcemap: true,
    dts: true,
})
