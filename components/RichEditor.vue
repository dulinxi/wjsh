<template>
  <div class="rich-editor">
    <div class="rich-editor__textarea" ref="editor"></div>
  </div>
</template>
<script>
import 'highlight.js/styles/monokai-sublime.css';
import 'quill/dist/quill.snow.css';
export default {
  data() {
    return {
      toolbarOptions: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote'],

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
    };
  },
  mounted() {
    if (process.client) {
      window.hljs = require('highlight.js');
      window.hljs.configure({
        // optionally configure hljs
        languages: ['javascript', 'ruby', 'python']
      });
      const Quill = require('quill');
      var editor = new Quill(this.$refs.editor, {
        modules: {
          syntax: true,
          toolbar: this.toolbarOptions
        },
        theme: 'snow'
      });

      this.$once('hook:beforeDestroy', function() {
        window.hljs = null;
      });
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.rich-editor {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  .ql-toolbar {
    border-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  .rich-editor__textarea {
    flex: 1;
    border-color: #fff;
  }
}
</style>