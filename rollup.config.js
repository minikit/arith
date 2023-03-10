import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'iife',
      name: 'arith',
      dest: './dist/index.iife.js'
    },
    {
      format: 'umd',
      name: 'arith',
      dest: './dist/index.umd.js'
    },
    {
      format: 'cjs',
      dest: './dist/index.js'
    },
    {
      format: 'es',
      dest: './dist/index.es.js'
    }
  ],
  plugins: [typescript({cacheRoot: `${require('temp-dir')}/.rpt2_cache`})]
}
