import buble from 'rollup-plugin-buble'
import common from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/UploadcareWidget.vue',
  external: [
    'uploadcare-widget'
  ],
  output: [
    {
      format: 'esm',
      file: 'dist/uploadcare.esm.js',
    },
    {
      format: 'umd',
      name: 'uploadcare-vue',
      file: 'dist/uploadcare.umd.js',
    },
    {
      format: 'cjs',
      file: 'dist/uploadcare.cjs.js',
    },
  ],
  plugins: [common(), node(), vue(), buble()]
}