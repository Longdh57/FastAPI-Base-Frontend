<template>
  <div>
    <CCard>
      <CCardHeader>
        <strong>Loading buttons</strong>
      </CCardHeader>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="primary">Primary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="secondary">Secondary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="success">Success</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="warning">Warning</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="danger">Danger</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="info">Info</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="light">Light</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="dark">Dark</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton timeout="2000" color="link">Link</CLoadingButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Spinner type grow
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="primary">Primary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="secondary">Secondary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="success">Success</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="warning">Warning</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="danger">Danger</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="info">Info</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="light">Light</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="dark">Dark</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton spinnerType="grow" timeout="2000" color="link">Link</CLoadingButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Progress and spinner
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="primary">Primary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="secondary">Secondary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="success">Success</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="warning">Warning</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="danger">Danger</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="info">Info</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="light">Light</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="dark">Dark</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress timeout="2000" color="link">Link</CLoadingButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Only progress
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="primary" :onChange="test">Primary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="secondary" :onChange="test">Secondary</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="success" :onChange="test">Success</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="warning" :onChange="test">Warning</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="danger" :onChange="test">Danger</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="info" :onChange="test">Info</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="light" :onChange="test">Light</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="dark" :onChange="test">Dark</CLoadingButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CLoadingButton progress :spinner="false" timeout="2000" color="link" :onChange="test">Link</CLoadingButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'StandardButtons',
  data () {
    return { 

    }
  },
  methods:{
    test: function(a){
      console.log('a -> ' + a)
    }
  }
}
</script>

<style scoped>


</style>