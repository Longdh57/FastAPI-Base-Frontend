<template>
  <CCard>
    <CCardHeader>
      <CIcon name="cil-notes"/> Form Validation
      <a class="badge badge-danger" href="https://coreui.io/pro/vue/">CoreUI Pro</a>
      <div class="card-header-actions">
        <a 
          class="card-header-action" 
          href="https://github.com/vuelidate/vuelidate" 
          target="_blank" 
          rel="noreferrer noopener"
        >
          <small class="text-muted">docs</small>
        </a>
      </div>
    </CCardHeader>
    <CCardBody>
      <CLink 
        href="https://github.com/vuelidate/vuelidate" 
        target="_blank" 
        rel="noreferrer noopener"
      >
        Vuelidate
      </CLink> 
      provides <cite>Simple, lightweight model-based validation for Vue.js. </cite>
      In this view Vuelidate features are integrated with CoreUI Vue form components.
      <hr>
      <CRow>
        <CCol lg="6">
          <!--<h6>Simple Form</h6>-->
          <CForm>
            <CInput
              label="First Name"
              :lazy="false"
              :value.sync="$v.form.firstName.$model"
              :isValid="checkIfValid('firstName')"
              placeholder="First Name"
              autocomplete="given-name"
              invalidFeedback="This is a required field and must be at least 2 characters"
            />

            <CInput
              label="Last Name"
              :lazy="false"
              :value.sync="$v.form.lastName.$model"
              :isValid="checkIfValid('lastName')"
              placeholder="Last Name"
              autocomplete="family-name"
              invalidFeedback="This is a required field and must be at least 1 character"
            />

            <CInput
              label="User Name"
              :lazy="false"
              :value.sync="$v.form.userName.$model"
              :isValid="checkIfValid('userName')"
              placeholder="User Name"
              autocomplete="username"
              invalidFeedback="This is a required field and must be at least 5 character"
            />

            <CInput
              label="Email"
              type="email"
              :lazy="false"
              :value.sync="$v.form.email.$model"
              :isValid="checkIfValid('email')"
              placeholder="Email"
              autocomplete="email"
              invalidFeedback="This is a required field and must be valid e-mail address"
            />

            <CRow>
              <CCol md="6">
                <CInput
                  :isValid="checkIfValid('password')"
                  :value.sync="$v.form.password.$model"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  autocomplete="new-password"
                  invalidFeedback="Required password containing at least: number, uppercase and lowercase letter, 8 characters"
                />
              </CCol>
              <CCol md="6">
                <CInput
                  :isValid="checkIfValid('password')"
                  :value.sync="$v.form.confirmPassword.$model"
                  label="Confirm Password"
                  type="password"
                  placeholder="Password"
                  autocomplete="new-password"
                  invalidFeedback="Passwords must match"
                />
              </CCol>
            </CRow>
            <CInputCheckbox
              :isValid="checkIfValid('accept')"
              :checked.sync="$v.form.accept.$model"
              label="I accept the terms of use"
              invalidFeedback="You must accept before submitting"
              custom
              class="mb-4"
            />
            <CButton 
              color="primary" 
              :disabled="!isValid || submitted"
              @click="submit"
            >
              Submit
            </CButton>
            <CButton 
              class="ml-1"  
              color="success" 
              :disabled="isValid"
              @click="validate"
            >
              Validate
            </CButton>
            <CButton 
              class="ml-1"
              color="danger"
              :disabled="!isDirty"
              @click="reset"
            >
              Reset
            </CButton>
          </CForm>
          <br/>
        </CCol>

        <CCol lg="6">
          <CCard :class="`bg-${submitted ? 'info' : 'secondary' }`">
            <pre>{{formString}}</pre>
          </CCard>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, minLength, email, sameAs, helpers } from "vuelidate/lib/validators"

export default {
  name: 'ValidationForms',
  data() {
    return {
      form: this.getEmptyForm(),
      submitted: false
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
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(2)
      },
      userName: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8),
        strongPass: helpers.regex('strongPass', /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      accept: {
        required,
        mustAccept: val => val
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

    submit () {
      if (this.isValid) {
        this.submitted = true
      }
    },

    validate () {
      this.$v.$touch()
    },

    reset () {
      this.form = this.getEmptyForm()
      this.submitted = false
      this.$v.$reset()
    },
    
    getEmptyForm () {
      return {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accept: false
      }
    }
  }
}
</script>
