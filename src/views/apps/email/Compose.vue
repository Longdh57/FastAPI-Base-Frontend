<template>
  <div>
    <p class="text-center">New Message</p>
    <form>
      <div class="form-row mb-3">
        <label for="to" class="col-2 col-sm-1 col-form-label">To:</label>
        <CCol cols="12" sm="11">
          <input type="email" class="form-control" id="to" placeholder="Type email">
        </CCol>
      </div>
      <div class="form-row mb-3">
        <label for="cc" class="col-2 col-sm-1 col-form-label">CC:</label>
        <CCol cols="12" sm="11">
          <input type="email" class="form-control" id="cc" placeholder="Type email">
        </CCol>
      </div>
      <div class="form-row mb-3">
        <label for="bcc" class="col-2 col-sm-1 col-form-label">BCC:</label>
        <CCol cols="12" sm="11">
          <input type="email" class="form-control" id="bcc" placeholder="Type email">
        </CCol>
      </div>
    </form>
    <CRow>
      <CCol sm="11" class="ml-auto">
        <div class="toolbar" role="toolbar">
          <div class="btn-group mr-1">
            <CButton color="light"><CIcon name="cil-bold"/></CButton>
            <CButton color="light"><CIcon name="cil-italic"/></CButton>
            <CButton color="light"><CIcon name="cil-underline"/></CButton>
          </div>
          <div class="btn-group mr-1">
            <CButton color="light"><CIcon name="cil-align-left"/></CButton>
            <CButton color="light"><CIcon name="cil-align-right"/></CButton>
            <CButton color="light"><CIcon name="cil-align-center"/></CButton>
            <CButton color="light"><CIcon name="cil-justify-center"/></CButton>
          </div>
          <div class="btn-group mr-1">
            <CButton color="light"><CIcon name="cil-indent-increase"/></CButton>
            <CButton color="light"><CIcon name="cil-indent-decrease"/></CButton>
          </div>
          <div class="btn-group mr-1">
            <CButton color="light"><CIcon name="cil-list"/></CButton>
            <CButton color="light"><CIcon name="cil-list-numbered"/></CButton>
          </div>
          <CButton color="light" class="mr-1"><CIcon name="cil-trash"/></CButton>
          <CButton color="light"><CIcon name="cil-paperclip"/></CButton>
          <LabelDropdown/>
        </div>
        <div class="form-group mt-4">
          <textarea 
            class="form-control" 
            id="message" 
            name="body" 
            rows="12" 
            placeholder="Click here to reply"
          ></textarea>
        </div>
        <div class="form-group">
          <CButton class="mr-1" type="submit" color="success">Send</CButton>
          <CButton class="mr-1" type="submit" color="light">Draft</CButton>
          <CButton class="mr-1" type="submit" color="danger">Discard</CButton>
        </div>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import LabelDropdown from './LabelDropdown'

export default {
  name: 'Compose',
  components: {
    LabelDropdown
  }
}
</script>