<template>
  <CRow>
    <CCol sm="6">
      <CCard>
        <CCardHeader>
          <strong>Masked Input</strong> 
          <small class="ml-1">vue-text-mask</small>
          <a 
            href="https://coreui.io/pro/vue/" 
            rel="noreferrer noopener" 
            target="_blank" 
            class="badge badge-danger ml-1"
          >
            CoreUI Pro
          </a>
          <div class="card-header-actions">
            <a 
              href="https://github.com/text-mask/text-mask/tree/master/vue#readme" 
              rel="noreferrer noopener" 
              target="_blank" 
              class="card-header-action"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CFormGroup
            wrapperClasses="input-group pt-2"
            description="ex. 99/99/9999"
          >
            <template #prepend-content>
              <CIcon name="cil-calendar"/>
            </template>
            <template #label>
              Date input
            </template>
            <template #input>
              <masked-input
                type="text"
                name="date"
                class="form-control"
                v-model="date"
                :mask="[/0|1|2|3/, /\d/, '/', /0|1|2|3/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]"
                :guide="true"
                placeholderChar="_"
                :showMask="true"
                :keepCharPositions="true"
              />
            </template>
          </CFormGroup>

          <CFormGroup
            wrapperClasses="input-group pt-2"
            description="ex. (999) 999-9999"
          >
            <template #prepend-content>
              <CIcon name="cil-phone"/>
            </template>
            <template #label>
              Phone Number
            </template>
            <template #input>
              <masked-input
                type="tel"
                name="phone"
                class="form-control"
                v-model="phone"
                :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                :guide="true"
                placeholderChar="#"
              />
            </template>
          </CFormGroup>

          <CFormGroup
            wrapperClasses="input-group pt-2"
            description="ex. 99-9999999"
          >
            <template #prepend-content>
              <CIcon name="cil-dollar"/>
            </template>
            <template #label>
              Taxpayer Identification Number
            </template>
            <template #input>
              <masked-input
                type="text"
                name="taxid"
                class="form-control"
                v-model="taxid"
                :mask="[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]"
                :guide="true"
                placeholderChar="#"
              />
            </template>
          </CFormGroup>

          <CFormGroup
            wrapperClasses="input-group pt-2"
            description="ex. 999-99-9999"
          >
            <template #prepend-content>
              <CIcon name="cil-user"/>
            </template>
            <template #label>
              Social Security Number
            </template>
            <template #input>
              <masked-input
                type="text"
                name="ssn"
                class="form-control"
                v-model="ssn"
                :mask="[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                :guide="true"
                placeholderChar="#"
              />
            </template>
          </CFormGroup>

          <CFormGroup
            wrapperClasses="input-group pt-2"
            description="ex. ~9.99 ~9.99 999"
          >
            <template #prepend-content>
              <CIcon name="cil-drop"/>
            </template>          
            <template #label>
              Eye Script
            </template>
            <template #input>
              <masked-input
                type="text"
                name="eye"
                class="form-control"
                v-model="eye"
                :mask="['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]"
                :guide="true"
                placeholderChar="#"
              />
            </template>
          </CFormGroup>

          <CFormGroup
            wrapperClasses="input-group pt-2"
            description="ex. 9999 9999 9999 9999"
          >
            <template #prepend-content>
              <CIcon name="cil-credit-card"/>
            </template>
            <template #label>
              Credit Card Number
            </template>
            <template #input>
              <masked-input
                type="text"
                name="ccn"
                class="form-control"
                v-model="ccn"
                :mask="[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]"
                :guide="true"
                placeholderChar="#"
              />
            </template>
          </CFormGroup>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol sm="6">
      <CCard>
        <CCardHeader>
          <strong>Multiselect</strong> 
          <small class="ml-1">vue-multiselect</small>
          <a 
            href="https://coreui.io/pro/vue/" 
            rel="noreferrer noopener" 
            target="_blank" 
            class="badge badge-danger ml-1"
          >
            CoreUI Pro
          </a>
          <div class="card-header-actions">
            <a 
              href="https://vue-multiselect.js.org/#sub-getting-started" 
              rel="noreferrer noopener" 
              target="_blank" 
              class="card-header-action"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <multiselect 
            v-model="multi" 
            :options="$options.multiselectOptions" 
            :multiple="true" 
            label="label" 
            track-by="label"
          />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <strong>Select</strong> <small class="ml-1">vue-select</small>
          <a 
            href="https://coreui.io/pro/vue/" 
            rel="noreferrer noopener" 
            target="_blank" 
            class="badge badge-danger ml-1"
          >
            CoreUI Pro
          </a>
          <div class="card-header-actions">
            <a 
              href="https://vue-select.org/" 
              rel="noreferrer noopener" 
              target="_blank" 
              class="card-header-action"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <v-select 
            v-model="selected" 
            multiple
            :options="$options.multiselectOptions" 
            placeholder="Select option"
          />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <strong>Date Picker</strong>
          <a 
            href="https://coreui.io/pro/vue/" 
            rel="noreferrer noopener"
            target="_blank" 
            class="badge badge-danger ml-1"
          >
            CoreUI Pro
          </a>
          <div class="card-header-actions">
            <a 
              href="https://vcalendar.io/" 
              rel="noreferrer noopener" 
              target="_blank" 
              class="card-header-action"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <v-date-picker
            mode="range"
            v-model="selectedDate"
            is-inline
          />
          <p>
            start: {{ selectedDate.start.toLocaleDateString() }} <br/>
            end: {{ selectedDate.end.toLocaleDateString() }}
          </p>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import MaskedInput from 'vue-text-mask'
import Multiselect from 'vue-multiselect'
import vSelect from 'vue-select'
import { DatePicker } from 'v-calendar'
import 'vue-select/dist/vue-select.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'

const today = new Date()

export default {
  name: 'advanced-forms',
  components: {
    MaskedInput,
    Multiselect,
    vSelect,
    'v-date-picker': DatePicker
  },
  data () {
    return {
      date: '',
      phone: '',
      taxid: '',
      ssn: '',
      eye: '',
      ccn: '',
      multi: null,
      selected: null,
      selectedDate: {
        start: new Date(today.getFullYear(), today.getMonth(), 7),
        end: new Date(today.getFullYear(), today.getMonth(), 11)
      }
    }
  },
  multiselectOptions: [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa', $isDisabled: true },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FM', label: 'Federated States Of Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VI', label: 'Virgin Islands' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
  ]
}
</script>
