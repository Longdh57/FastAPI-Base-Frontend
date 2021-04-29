<template>
  <CRow>
    <CCol md="12">
      <CCard>
        <CCardHeader>
          <strong>Thêm người dùng</strong>
          <div class="float-right">
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput
              description="Let us know your full name."
              label="Full Name"
              horizontal
              autocomplete="name"
              v-model="formCreate.full_name"
            />
            <CInput
              label="Email input"
              description="Please enter your email"
              placeholder="Enter your email"
              type="email"
              horizontal
              autocomplete="email"
              v-model="formCreate.email"
            />
            <CInput
              label="Password Input"
              description="Please enter a complex password"
              placeholder="Enter your password"
              type="password"
              horizontal
              autocomplete="current-password"
              v-model="formCreate.password"
            />
            <CSelect
              label="Role"
              horizontal
              :options="[{ value: 'admin', label: 'Admin' }, { value: 'guest', label: 'Guest' }]"
              placeholder="Please select"
              @change="onChange($event)"
            />
            <CRow form class="form-group">
              <CCol tag="label" sm="3" class="col-form-label">
                Active
              </CCol>
              <CCol sm="9">
                <CSwitch
                  class="mr-1"
                  color="success"
                  :checked="true"
                  shape="pill"
                />
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <div class="float-right">
            <CButton type="submit" size="sm" color="success" @click="handleCreate">
              <CIcon name="cil-check-circle"/> Lưu
            </CButton>
          </div>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {createUser} from "@/api/user";

export default {
  name: "CreateUser",
  data() {
    return {
      roleOptions: ['admin', 'guest'],
      formCreate: {
        full_name: null,
        email: null,
        password: null,
        role: null,
        is_active: true
      }
    }
  },
  methods: {
    onChange(event) {
      this.formCreate.role = event.target.value
    },
    handleCreate() {
      console.log(this.formCreate)
      // createUser(this.formCreate).then(() => {
      //   this.$router.push({ path: '/users' })
      // })
    }
  }
}
</script>

<style scoped>

</style>
