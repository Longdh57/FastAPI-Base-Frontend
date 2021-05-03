<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader>
          Đổi mật khẩu
          <div class="float-right">
            <CButton color="primary" @click="goBack"><CIcon name="cil-arrow-left"/> Back</CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput
              label="Full Name"
              v-model="full_name"
              horizontal
              plaintext
            />
            <CInput
              :isValid="checkIfValid('password')"
              :value.sync="$v.form.password.$model"
              label="Password *"
              horizontal
              type="password"
              placeholder="Password"
              autocomplete="new-password"
              invalidFeedback="Required password containing at least: number, uppercase and lowercase letter, 8 characters"
            />
            <CInput
              :isValid="checkIfValid('confirmPassword')"
              :value.sync="$v.form.confirmPassword.$model"
              label="Confirm Password *"
              horizontal
              type="password"
              placeholder="Password"
              autocomplete="new-password"
              invalidFeedback="Passwords must match"
            />
          </CForm>
        </CCardBody>
        <CCardFooter>
          <div class="float-right">
            <CButton type="submit" color="success" @click="handleChangePassword">
              <CIcon name="cil-check-circle"/> Lưu
            </CButton>
          </div>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import {updateCurrentUser} from "@/api/user"
import {mapState} from 'vuex'
import {validationMixin} from "vuelidate"
import {helpers, minLength, required, sameAs} from "vuelidate/lib/validators"

export default {
  name: 'UserChangePassword',
  data () {
    return {
      form: {
        password: null,
        confirmPassword: null
      },
      formAction: null
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
        strongPass: helpers.regex('strongPass', /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  computed: mapState({
    full_name: state => state.user.full_name
  }),
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
      this.$router.go(-1) || this.$router.push({path: '/users'})
    },

    handleChangePassword() {
      this.formAction = {
        password: this.form.password
      }
      updateCurrentUser(this.formAction).then(() => {
        this.$notify({
          type: 'success',
          title: 'Success',
          text: 'Đổi mật khẩu thành công!'
        })
        this.$router.push({ path: '/users' })
      })
    }
  }
}
</script>
