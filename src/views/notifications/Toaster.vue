<template>
  <CCard>
    <CCardHeader>
      <div>
        <CIcon name="cil-task"/> Toasts
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
            href="https://coreui.io/vue/docs/components/toast" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </div>
    </CCardHeader>
    <CRow>
      <CCol sm="12" lg="6">
        <CForm class="m-4">
          <h5>Add toast with following props:</h5>
          <CInputCheckbox
            :checked.sync="autohide"
            custom
            label="Autohide of the toast"
            class="my-2 mt-4"
          />
          <CInput
            v-if="autohide"
            :value.sync="autohideValue"
            type="number"
            lazy
            label="Time to autohide"
            class="my-2"
          />
          <CSelect
            :value.sync="position"
            :options="positions"
            custom
            label="Position"
            class="my-2"
          />

          <CInputCheckbox
            :checked.sync="fade"
            custom
            label="fade"
            class="my-2"
          />

          <CInputCheckbox
            :checked.sync="closeButton"
            custom
            label="closeButton"
            class="my-2"
          />

          <CButton 
            class="mr-1 w-25" 
            color="success" 
            @click="addToast()"
          >
            Add toast
          </CButton>
        </CForm>
      </CCol>
      <CCol sm="12" lg="6">
        <div class="m-4">
          <CToaster 
            v-for="(toaster, toasterKey) in toasters"
            :position="toasterKey"
            :key="'toaster' + toasterKey"
          >
            <template v-for="(toast, key) in toaster">
              <CToast
                :key="'toast' + key"
                :show="true"
                v-bind="toast"
              >
                {{`This is a toast in ${toasterKey} positioned toaster number ${key + 1}.`}}
              </CToast>
            </template>
          </CToaster>
        </div>
      </CCol>
    </CRow>
  </CCard>
</template>

<script>

export default {
  name: 'Toaster',
  data () {
    return {
      toasts: [
        { position: 'static', header: 'Toast title'},
        { position: 'static', header: 'Toast title'},
        { position: 'top-right', header: 'Toast title', autohide: 3000 }
      ],
      autohide: true,
      autohideValue: 5000,
      closeButton: true,
      fade: true,
      position: 'top-right',
      header: 'Toast title',
      positions: [
        'static',
        'top-left', 
        'top-center', 
        'top-right', 
        'top-full',
        'bottom-left',
        'bottom-center', 
        'bottom-right',
        'bottom-full'
      ]
    }
  },
  computed: {
    toastConfig () {
      return {
        autohide: this.autohide ? this.autohideValue : false,
        closeButton: this.closeButton,
        fade: this.fade,
        position: this.position,
        header: this.header
      }
    },
    toasters () {
      return this.toasts.reduce((toasters, toast) => {
        toasters[toast.position] = toasters[toast.position] || []
        toasters[toast.position].push(toast)
        return toasters
      }, {})
    }
  },
  methods: {
    addToast () {
      this.toasts.push(this.toastConfig)
    }
  }
}
</script>
