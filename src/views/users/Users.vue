<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader>
          Danh sách người dùng
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="listUsers"
            :fields="fields"
            clickable-rows
            :items-per-page-select="{'label': 'Size', 'values': [3, 10, 20, 100]}"
            :items-per-page.sync="filterSearch.page_size"
            @pagination-change="pageSizeChange"
            :pagination="false"
            @row-clicked="rowClicked"
          >
            <template #role="data">
              <td>
                <CBadge :color="getBadge(data.item.role)">
                  {{data.item.role}}
                </CBadge>
              </td>
            </template>
          </CDataTable>
          <CPagination
            :activePage.sync="filterSearch.page"
            :pages="totalPages"
            align="end"
            @update-active-page="updatePage"
          />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {getListUsers} from "@/api/user";
export default {
  name: 'Users',
  data () {
    return {
      fields: [
        { key: 'email', label: 'Email', _classes: 'font-weight-bold' },
        { key: 'full_name' },
        { key: 'is_active', label: 'Active' },
        { key: 'last_login' },
        { key: 'role' }
      ],
      activePage: 1,
      listUsers: null,
      total: 0,
      totalPages: 0,
      filterSearch: {
        page: 1,
        page_size: 3
      }
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    },
    filterSearch: function (val) {
      console.log(val)
    },
  },
  created() {
    this.getList()
  },
  methods: {
    getBadge (role) {
      switch (role) {
        case 'admin': return 'success'
        case 'guest': return 'secondary'
        default: 'primary'
      }
    },
    rowClicked (item, index) {
      console.log(`${index + 1}`)
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    },
    pageSizeChange() {
      console.log('xxx')
      console.log(this.filterSearch.page_size)
    },
    updatePage(e) {
      console.log('updatePage' + e)
    },
    getList() {
      getListUsers(this.filterSearch).then(response => {
        const { data, metadata } = response
        this.listUsers = data
        this.total = metadata.total_items
        this.totalPages = ((this.total - 1) / this.filterSearch.page_size) + 1
      })
    },
  }
}
</script>
