import vuePlugin from 'rollup-plugin-vue'

export default {
  input: 'client/index.vue',
  output: {
    file: 'public/bundle.js',
    format: 'cjs'
  },
  plugins: [
    vuePlugin()
  ]
};