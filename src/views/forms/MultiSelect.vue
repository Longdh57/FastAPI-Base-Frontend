<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard>
          <CCardHeader>
            <strong>CoreUI Multiselect</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <h2>Dropdown</h2>
              <CRow form>
                <CCol col="3">
                  <label>Single Select</label>
                  <CMultiSelect
                    :multiple="false"
                    :options="options"
                    :search="true"
                    :selected="[]"
                    :selection="true"
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="..."
                    selectionType="text"
                  >
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - text selection</label>
                  <CMultiSelect
                    :options="options"
                    :selected="[]"
                    search
                    searchPlaceholder="..."
                    selectionType="text"
                  >
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - tag selection</label>
                  <CMultiSelect
                    :options="options"
                    :selected="[]"
                    search
                    searchPlaceholder="..."
                    selectionType="tags"
                  >
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - counter selection</label>
                  <CMultiSelect
                    :options="options"
                    :selected="[]"
                    search
                    searchPlaceholder="..."
                    selectionType="counter"
                  >
                  </CMultiSelect>
                </CCol>
              </CRow>
            </CForm>
            <hr>
            <CForm>
              <h2>Inline</h2>
              <CRow form>
                <CCol col="3">
                  <label>Multiple Select - counter selection</label>
                  <CMultiSelect
                    :options="options"
                    :search="true"
                    :selected="[]"
                    :selection="true"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="Search"
                    selectionType="counter"
                  >
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - tag selection</label>
                  <CMultiSelect
                    :options="options"
                    :search="true"
                    :selected="[]"
                    :selection="true"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="Search"
                    selectionType="tags"
                  >
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - without selection</label>
                  <CMultiSelect
                    :options="options"
                    :search="true"
                    :selected="[]"
                    :selection="false"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="Search"
                    selectionType="tags"
                  >
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - without selection and search</label>
                  <CMultiSelect
                    :options="options"
                    :search="false"
                    :selected="[]"
                    :selection="false"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="Search"
                    selectionType="tags"
                  >
                  </CMultiSelect>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
            <CForm>
              <h2>Dropdown</h2>
              <CRow form>
                <CCol col="3">
                  <label>Single Select</label>
                  <CMultiSelect
                    :multiple="false"
                    :search="true"
                    :selected="['1']"
                    :selection="true"
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="..."
                    selectionType="text"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - text selection</label>
                  <CMultiSelect
                    :selected="['1']"
                    search
                    searchPlaceholder="..."
                    selectionType="text"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - tag selection</label>
                  <CMultiSelect
                    :selected="['1']"
                    search
                    searchPlaceholder="..."
                    selectionType="tags"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - counter selection</label>
                  <CMultiSelect
                    :selected="['1']"
                    search
                    searchPlaceholder="..."
                    selectionType="counter"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
              </CRow>
            </CForm>
            <hr>
            <CForm>
              <h2>Inline</h2>
              <CRow form>
                <CCol col="3">
                  <label>Multiple Select - counter selection</label>
                  <CMultiSelect
                    :search="true"
                    :selected="['1']"
                    :selection="true"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="Search"
                    selectionType="counter"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - tag selection</label>
                  <CMultiSelect
                    :search="true"
                    :selected="['1']"
                    :selection="true"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="Search"
                    selectionType="tags"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - without selection</label>
                  <CMultiSelect
                    :search="true"
                    :selected="['1']"
                    :selection="false"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    searchPlaceholder="Search"
                    selectionType="text"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
                <CCol col="3">
                  <label>Multiple Select - without selection and search</label>
                  <CMultiSelect
                    :search="false"
                    :selected="['1']"
                    :selection="false"
                    inline
                    optionsEmptyPlaceholder="No options placeholder"
                    selectionType="text"
                  >
                    <option value="0">enhancement</option>
                    <option value="1">bug</option>
                    <option value="2">duplicate</option>
                    <option value="3">invalid</option>
                    <optgroup label="group">
                      <option value="4">enhancement2</option>
                      <option value="5">bug2</option>
                    </optgroup>
                  </CMultiSelect>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'MultiSelect',
  data() {
    return {
      selected: [
        '1',
        // '1', 'group option 2', '5'
      ],
      options: [
        {
          value: 0,
          text: 'enhancement'
        },
        {
          value: 1,
          text: 'bug',
          // selected: true
        },
        {
          value: 2,
          text: 'duplicate',
          // selected: true
        },
        {
          value: 3,
          text: 'invalid'
        },
        {
          label: 'group',
          options: [
            {
              value: 4,
              text: 'enhancement2'
            },
            {
              value: 5,
              text: 'bug2'
            }
          ]
        }
      ],
    }
  },
  methods: {}
}
</script>
