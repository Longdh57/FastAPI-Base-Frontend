<template>
  <CDropdown class="ml-1 d-inline" color="light">
    <template #toggler-content>
      <CIcon name="cil-tags"/>
    </template>
    <CDropdownItem href="#">
      Add label <CBadge class="ml-1" color="danger">Home</CBadge>
    </CDropdownItem>
    <CDropdownItem href="#">
      Add label <CBadge class="ml-1" color="info"> Job</CBadge>
    </CDropdownItem>
    <CDropdownItem href="#">
      Add label <CBadge class="ml-1" color="success"> Clients</CBadge>
    </CDropdownItem>
    <CDropdownItem href="#">
      Add label <CBadge class="ml-1" color="warning"> News</CBadge>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'LabelDropdown'
}
</script>