// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from "rollup-plugin-babel";
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
// import tslint from "rollup-plugin-tslint";


export default [
    {
        input: 'src/index.ts',
        external: ['ms'],
        output: {
            file: './lib/super-tools-lib.js',
            name: 'superToolsLib',
            // sourcemap: true,
            format: 'umd',
            exports: 'default',
        },
        plugins: [
            // tslint(),
            typescript(),
            json(),
            resolve({ browser: true }),  // 这样 Rollup 能找到 `ms`
            commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
            eslint({
                throwOnError: true,
                throwOnWarning: true,
                include: ['src/**'],
                exclude: ['node_modules/**']
            }),
            babel({
                exclude: 'node_modules/**', // 防止打包node_modules下的文件
                runtimeHelpers: true,       // 使plugin-transform-runtime生效
            }),
            terser(), // 压缩代码
            livereload(),
            serve({
                open: true,
                port: '8888',
                contentBase: ''
            })
        ],
        // external: ['better-xlsx','file-saver']
    }
];