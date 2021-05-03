<template>
  <div class="c-app flex-row align-items-center" :class="{ 'c-dark-theme': $store.state.darkMode }">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">FastAPI Base</p>
                  <CInput
                    :isValid="checkIfLoginFormValid('username')"
                    placeholder="Email"
                    autocomplete="username email"
                    v-model="loginForm.username"
                    invalidFeedback="Username is required field and must be valid e-mail address"
                  >
                    <template #prepend-content>
                      <CIcon name="cil-user"/>
                    </template>
                  </CInput>
                  <CInput
                    :isValid="checkIfLoginFormValid('password')"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="loginForm.password"
                    invalidFeedback="Password is required field and must be at least 6 character"
                  >
                    <template #prepend-content>
                      <CIcon name="cil-lock-locked"/>
                    </template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="handleLogin">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0" @click="handleClickRegister">Register now!</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import {validationMixin} from "vuelidate"
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'long.dh@teko.vn',
        password: 'Longbn@347'
      },
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  computed: {
    isValid() {
      return !this.$v.loginForm.$invalid
    },
  },
  mixins: [validationMixin],
  validations: {
    loginForm: {
      username: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    checkIfLoginFormValid(fieldName) {
      const field = this.$v.loginForm[fieldName]
      if (!field.$dirty) {
        return null
      }
      return !(field.$invalid || field.$model === '')
    },

    handleLogin() {
      this.$v.$touch()
      if (this.isValid) {
        this.$store.dispatch('login', this.loginForm)
          .then(async () => {
            this.$notify({
              type: 'success',
              title: 'Success',
              text: 'Đăng nhập thành công!'
            })
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          })
          .catch(() => {
            this.$notify({
              type: 'error',
              title: 'Lỗi',
              text: 'Đăng nhập thất bại!'
            })
          })
      } else {
        return false
      }
    },

    handleClickRegister() {
      this.$router.push({path: '/register'})
    },

    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>
