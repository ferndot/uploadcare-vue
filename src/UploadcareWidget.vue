<template>
  <div @click.prevent="openDialog">
    <slot>
      <button>Upload</button>
    </slot>
  </div>
</template>

<script>
import uploadcare from 'uploadcare-widget'

export default {
  props: {
    publicKey: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      required: false
    }
  },
  computed: {
    file: function () {
      if (!this.value) return null

      return uploadcare.fileFrom(
        'uploaded', this.value, { publicKey: this.publicKey }
      )
    }
  },
  methods: {
    openDialog: function () {
      const dialog = uploadcare.openDialog(this.file, {
        publicKey: this.publicKey,
        ...this.options
      })

      dialog.done(file => {
        file.done(info => this.$emit('input', info.cdnUrl))
      })
    }
  }
}
</script>

<style>

</style>
