<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem @click="userInfoHandle">
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownItem @click="changePasswordHandle">
      <CIcon name="cil-settings" /> Change Password
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem @click="logout">
      <CIcon name="cil-lock-locked"/> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return {
      itemsCount: 42
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      await this.$router.push(`/login`)
      window.localStorage.removeItem('vuex')
    },
    async userInfoHandle() {
      await this.$router.push('/users/info')
    },
    async changePasswordHandle() {
      await this.$router.push('/users/change-password')
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>
