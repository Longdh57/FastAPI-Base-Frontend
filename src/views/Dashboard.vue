<template>
  <div>
    <CCard bodyWrapper>
      Chào mừng bạn {{ user_full_name }} đã đăng nhập hệ thống
    </CCard>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  computed: {
    user_full_name() {
      return this.$store.state.user.full_name
    },
  }
}
</script>
