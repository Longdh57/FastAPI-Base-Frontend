<template>
  <CCardBody>
    This example simulates data passed lazily from backend.<br><br> 
    <!-- 
      This example simulates data passed lazily from backend.
      This example might be connected to backend, for items lazy loading.
      To integrate with backend delete second CDataTable and implement 
      API request in onTableChange() method
      -->
    <CDataTable
      :items="loadedItems"
      :fields="['username', 'registered', 'role', 'status']"
      :column-filter="{ external: true, lazy: true }"
      :column-filter-value.sync="columnFilterValue"
      :table-filter="{ external: true, lazy: true }"
      :table-filter-value.sync="tableFilterValue"
      :sorter="{ external: true, resetable: true }"
      :sorter-value.sync="sorterValue"
      :items-per-page="5"
      :active-page="1"
      hover
      :loading="loading"
    />
    <CPagination
      v-show="pages > 1"
      :pages="pages"
      :active-page.sync="activePage"
    />
    <CDataTable
      class="d-none"
      ref="externalAgent"
      :items="usersData.slice(0)"
      :fields="['username', 'registered', 'role', 'status']"
      :column-filter-value="columnFilterValue"
      :table-filter-value="tableFilterValue"
      :sorter-value="sorterValue"
      :items-per-page="5"
      :active-page="activePage"
      hover
    />
  </CCardBody>
</template>

<script>
import usersData from '../users/UsersData'

export default {
  name: 'BackendTable',
  data () {
    return {
      usersData,
      sorterValue: { column: null, asc: true },
      columnFilterValue: {},
      tableFilterValue: '',
      activePage: 1,
      loadedItems: usersData.slice(0, 5),
      loading: false,
      pages: 5
    }
  },
  watch: {
    reloadParams () {
      this.onTableChange()
    }
  },
  computed: {
    reloadParams () {
      return [  
        this.sorterValue,
        this.columnFilterValue,
        this.tableFilterValue,
        this.activePage
      ]
    }
  },
  methods: {
    onTableChange () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        const agent = this.$refs.externalAgent
        this.loadedItems = agent.currentItems
        this.pages = Math.ceil(agent.sortedItems.length / 5)
      }, 1000)
    }
  }
}
</script>