import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import packageJson from './package.json' assert { type: 'json' }
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'

const sharedPlugins = [resolve(), commonjs()]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [...sharedPlugins, typescript({ tsconfig: './tsconfig.json', exclude: ['example/**/*'] })],
  },
  {
    input: './example/index.tsx',
    output: [{ file: 'example/dist/index.js', format: 'esm' }],
    plugins: [
      ...sharedPlugins,
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      postcss({
        plugins: [],
      }),
    ],
  },
]
