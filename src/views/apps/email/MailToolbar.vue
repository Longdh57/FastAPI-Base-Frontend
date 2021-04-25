<template>
  <div class="toolbar p-3">
    <div class="btn-group mr-1">
      <CButton color="light"><CIcon name="cil-envelope-closed"/></CButton>
      <CButton color="light"><CIcon name="cil-star"/></CButton>
      <CButton color="light"><CIcon name="cil-bookmark"/></CButton>
    </div>
    <div class="btn-group mr-1">
      <CButton color="light"><CIcon name="cil-share"/></CButton>
      <CButton color="light"><CIcon name="cil-share-all"/></CButton>
      <CButton color="light"><CIcon name="cil-share-boxed"/></CButton>
    </div>
    <CButton color="light"><CIcon name="cil-trash"/></CButton>
    <LabelDropdown/>
    <div class="btn-group float-right">
      <CButton color="light"><CIcon name="cil-chevron-left"/></CButton>
      <CButton color="light"><CIcon name="cil-chevron-right"/></CButton>
    </div>
  </div>
</template>

<script>
import LabelDropdown from './LabelDropdown'
export default {
  name: 'MailToolbar',
  components: {
    LabelDropdown
  }
}
</script>