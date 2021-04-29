<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader>
          Thông tin người dùng
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              <table class="table table-clear" v-if="userInfo">
                <tbody>
                <tr>
                  <td class="left"><strong>Full Name</strong></td>
                  <td class="right">{{ userInfo.full_name }}</td>
                </tr>
                <tr>
                  <td class="left"><strong>Email</strong></td>
                  <td class="right">{{ userInfo.email }}</td>
                </tr>
                <tr>
                  <td class="left"><strong>Active</strong></td>
                  <td class="right">
                    <CIcon :name="(userInfo.is_active) ? 'cil-check' : 'cil-x-circle'"/>
                  </td>
                </tr>
                <tr>
                  <td class="left"><strong>Last login</strong></td>
                  <td class="right">{{ formatDate(userInfo.last_login) }}</td>
                </tr>
                <tr>
                  <td class="left"><strong>Role</strong></td>
                  <td class="right">{{ userInfo.role }}</td>
                </tr>
                </tbody>
              </table>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {getDetailUser} from "@/api/user"
import { formatDate } from '@/utils/format-date'
export default {
  name: 'User',
  data () {
    return {
      user_id: this.$route.params.id,
      userInfo: null
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/users'})
    },
    getDetail() {
      getDetailUser(this.user_id).then(res => {
        this.userInfo = res.data
      })
    },
    formatDate: formatDate
  }
}
</script>
