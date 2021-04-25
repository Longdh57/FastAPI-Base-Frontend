<template>
  <CCardBody>
    <CButton
      color="primary"
      class="mb-2"
      :href="csvCode" 
      download="coreui-table-data.csv"
      target="_blank"
    >
      Download current items (.csv)
    </CButton>
    <CDataTable
      :items="usersData"
      column-filter
      :items-per-page="5"
      hover
      sorter
      pagination
      @filtered-items-change="setCurrentItems"
    />    
  </CCardBody>
</template>

<script>
import usersData from '../users/UsersData'

export default {
  name: 'DownloadTable',
  data () {
    return {
      usersData,
      currentItems: usersData.slice()
    }
  },
  computed: {
    csvContent () {
      return this.currentItems.map(item => Object.values(item).join(',')).join('\n')
    },
    csvCode () {
      return 'data:text/csv;charset=utf-8,SEP=,%0A' + encodeURIComponent(this.csvContent)
    }
  },
  methods: {
    setCurrentItems (val) {
      this.currentItems = val
    }
  }
}
</script>