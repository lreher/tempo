import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'client/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    // commonjs(),
    vue(),
    babel(),
  ],
  external: ['vue']
};
