<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <strong>Thêm người dùng</strong>
            <div class="float-right">
              <CButton color="primary" @click="goBack"><CIcon name="cil-arrow-left"/> Back</CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description="Tên đầy đủ"
                label="Full Name *"
                horizontal
                autocomplete="name"
                v-model="form.fullName"
                :lazy="false"
                :value.sync="$v.form.fullName.$model"
                :isValid="checkIfValid('fullName')"
                invalidFeedback="Full Name is a required field and must be at least 1 character"
              />
              <CInput
                label="Email *"
                description="Nhập email"
                placeholder=""
                type="email"
                horizontal
                autocomplete="email"
                v-model="form.email"
                :lazy="false"
                :value.sync="$v.form.email.$model"
                :isValid="checkIfValid('email')"
                invalidFeedback="Email is required and type email"
              />
              <CInput
                label="Password *"
                description="Nhập password"
                placeholder="Enter your password"
                type="password"
                horizontal
                autocomplete="current-password"
                v-model="form.password"
                :lazy="false"
                :value.sync="$v.form.password.$model"
                :isValid="checkIfValid('password')"
                invalidFeedback="Password is required and min 8 charaters"
              />
              <CSelect
                label="Role *"
                horizontal
                description="Chọn Role"
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
              <CButton type="submit" color="success" @click="handleCreate">
                <CIcon name="cil-check-circle"/> Lưu
              </CButton>
            </div>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import {createUser} from "@/api/user"
import {email, minLength, required} from "vuelidate/lib/validators"

export default {
  name: "CreateUser",
  data() {
    return {
      roleOptions: ['admin', 'guest'],
      form: {
        fullName: null,
        email: null,
        password: null,
        role: null,
        is_active: true
      },
      formCreateAction: null
    }
  },
  computed: {
    formString () { return JSON.stringify(this.form, null, 4) },
    isValid () { return !this.$v.form.$invalid },
    isDirty () { return this.$v.form.$anyDirty },
  },
  mixins: [validationMixin],
  validations: {
    form: {
      fullName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    checkIfValid (fieldName) {
      const field = this.$v.form[fieldName]
      if (!field.$dirty) {
        return null
      }
      return !(field.$invalid || field.$model === '')
    },
    validate () {
      this.$v.$touch()
    },
    goBack() {
      this.$router.go(-1)
    },
    onChange(event) {
      this.form.role = event.target.value
    },
    handleCreate() {
      if (this.isValid) {
        this.formCreateAction = {
          full_name: this.form.fullName,
          email: this.form.email,
          is_active: this.form.is_active,
          password: this.form.password,
          role: this.form.role,
        }
        createUser(this.formCreateAction).then(() => {
          this.$notify({
            type: 'success',
            title: 'Success',
            text: 'Tạo người dùng thành công!'
          })
          this.$router.push({ path: '/users' })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
