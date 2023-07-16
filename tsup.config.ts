import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['esm', 'cjs'],
    target: ['es2022'],
    bundle: true,
    treeshake: true,
    dts: true,
    clean: true,
    outDir: 'lib'
});