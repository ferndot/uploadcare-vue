import UploadcareWidget from './UploadcareWidget'

function install(Vue, options) {
  Vue.component('uploadcare-widget', UploadcareWidget)
}

export default {
  install,
  UploadcareWidget
}