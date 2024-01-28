/**
 * rollup.config.js
 * Rollup configuration file.
 */

export default [
  {
    input: './src/js/main.js',
    watch: {
      include: './src/js/main.js',
    },
    output: {
      file: './dist/js/bundle.js',
      format: 'iife',
      sourcemap: 'inline',
    },
  },
]
