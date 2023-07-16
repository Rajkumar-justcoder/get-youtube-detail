import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['esm', 'cjs'],
    target: ['es2022'],
    bundle: false,
    treeshake: true,
    entry: ["src/**/*.ts"],
    dts: true,
    clean: true,
    outDir: 'lib'
});