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
            :items-per-page-select="{'label': 'Size', 'values': [5, 10, 20, 100]}"
            :items-per-page="filterSearch.page_size"
            @pagination-change="pageSizeChange"
            :pagination="false"
          >
            <template #is_active="data">
              <td>
                <CIcon :name="(data.item.is_active) ? 'cil-check' : 'cil-x-circle'"/>
              </td>
            </template>
            <template #role="data">
              <td>
                <CBadge :color="getBadge(data.item.role)">
                  {{data.item.role}}
                </CBadge>
              </td>
            </template>
            <template #action="data">
              <td @click="rowClicked(data.item.id)">
                <CIcon name="cil-pencil"/>
              </td>
            </template>
          </CDataTable>
          <CPagination
            :activePage.sync="filterSearch.page"
            :pages="Math.ceil(total / filterSearch.page_size)"
            align="end"
          />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {getListUsers} from "@/api/user"
import { flagSet, freeSet } from '@coreui/icons'
export default {
  name: 'Users',
  flagSet,
  freeSet,
  data () {
    return {
      fields: [
        { key: 'email', label: 'Email', _classes: 'font-weight-bold' },
        { key: 'full_name' },
        { key: 'is_active', label: 'Active' },
        { key: 'last_login' },
        { key: 'role' },
        { key: 'action', label: 'Action' }
      ],
      activePage: 1,
      listUsers: null,
      total: 0,
      totalPages: 0,
      filterSearch: {
        page: 1,
        page_size: 5
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
    filterSearch: {
      deep: true,
      handler() {
        this.getList()
      }
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
    rowClicked (id) {
      console.log(id)
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    },
    pageSizeChange(currentSize) {
      this.filterSearch.page_size = currentSize;
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
