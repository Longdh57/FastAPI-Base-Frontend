<template>
  <CRow>
    <CCol sm="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-grid"/> Advanced 
          <CLink 
            href="https://coreui.io/vue/docs/components/table"
            target="blank"
          >
            CDataTable
          </CLink> application
        </CCardHeader>
        <DemoTable/>
      </CCard>
      <CCard>
        <CCardHeader>
          Backend integration example
        </CCardHeader>
        <BackendTable/>
      </CCard>
      <CCard>
        <CCardHeader>
          Current table items download to xlsx/csv table
        </CCardHeader>
        <DownloadTable/>
      </CCard>
      <CCard>
        <CCardHeader>
          Table with selectable rows
        </CCardHeader>
        <SelectTable/>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import BackendTable from './BackendTable'
import DemoTable from './DemoTable'
import DownloadTable from './DownloadTable'
import SelectTable from './SelectTable'

export default {
  name: 'AdvancedTables',
  components: {
    BackendTable,
    DemoTable,
    DownloadTable,
    SelectTable
  }
}
</script>
