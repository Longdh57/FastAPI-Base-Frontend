<template>
  <CCard>
    <CCardHeader>
      CodeMirror
      <a 
        href="https://coreui.io/pro/vue/" 
        rel="noreferrer noopener" 
        target="_blank" 
        class="badge badge-danger ml-1"
      >
        CoreUI Pro
      </a>
      <div class="card-header-actions">
        <a 
          href="https://github.com/surmon-china/vue-codemirror" 
          rel="noreferrer noopener" 
          target="_blank" 
          class="card-header-action"
        >
          <small class="text-muted">docs</small>
        </a>
      </div>
    </CCardHeader>
    <CCardBody>
      <VueCodeMirror 
        ref="codeMirrorComponent" 
        v-model="code" 
        :options="editorOptions"
      />
    </CCardBody>
    <CCardFooter>
      <CForm inline>
        <CSelect
          size="sm"
          class="mr-1"
          :value.sync="selectedTheme"
          :options="['material', 'eclipse']"
        />
        <CSelect 
          size="sm"
          :value.sync="selectedMode"
          :options="['markdown', 'javascript', {value : 'xml', label: 'html'}]"
        />
      </CForm>
    </CCardFooter>
  </CCard>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import sampleCode from './_examples'

export default {
  name: 'CodeEditors',
  components: {
    VueCodeMirror: codemirror
  },
  data () {
    return {
      selectedMode: 'xml',
      selectedTheme: 'eclipse'
    }
  },
  computed: {
    codemirrorInstance () {
      return this.$refs.codeMirrorComponent.codemirror
    },
    editorOptions () {
      return {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        line: true,
        mode: this.selectedMode,
        theme: this.selectedTheme,
        autofocus: true
      }
    },
    code () {
      return sampleCode[this.selectedMode]
    }
  },
  mounted () {
    if (this.codemirrorInstance.options.autofocus) {
      this.codemirrorInstance.setSize('100%', '50vh')
      this.codemirrorInstance.focus()
    }
  }
}
</script>
