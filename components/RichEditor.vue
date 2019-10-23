<template>
  <div class="rich-editor" id="editor"></div>
</template>
<script>
import 'highlight.js/styles/monokai-sublime.css'
import 'quill/dist/quill.snow.css'
export default {
  data() {
    return {
      toolbarOptions: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['image', 'code', 'code-block'],
        ['clean'] // remove formatting button
      ]
    }
  },
  mounted() {
    if (process.client) {
      window.hljs = require('highlight.js')
      window.hljs.configure({
        // optionally configure hljs
        languages: ['javascript', 'ruby', 'python']
      })
      const Quill = require('quill')
      var editor = new Quill('#editor', {
        modules: {
          syntax: true,
          toolbar: this.toolbarOptions
        },
        theme: 'snow'
      })

      this.$once('hook:beforeDestroy', function() {
        window.hljs = null
      })
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.rich-editor {
  width: 100%;
  height: 100%;
}
</style>