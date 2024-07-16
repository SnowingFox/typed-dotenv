import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'es2022',
  splitting: true,
  dts: true,
  clean: true,
})
