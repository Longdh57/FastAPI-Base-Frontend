<template>
  <CSidebar
    color-scheme="light"
    :minimize="minimized"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"

  >
    <CSidebarBrand class="d-md-down-none" to="/apps/email">
      <CIcon
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>
    <CSidebarNav>
      <CSidebarNavItem
        color="success"
        to="./compose"
        icon="cil-pencil"
        name="Compose"
      />
      <CSidebarNavItem
        to="./inbox"
        icon="cil-inbox"
        name="Inbox"
        :badge="{ text: 4, color: 'danger' }"
      />
      <CSidebarNavItem
        icon="cil-star"
        name="Stared"
      />
      <CSidebarNavItem
        icon="cil-paper-plane"
        name="Sent"
      />
      <CSidebarNavItem
        icon="cil-trash"
        name="Trash"
      />
      <CSidebarNavItem
        icon="cil-bookmark"
        name="Important"
        :badge="{ text: 5, color: 'info' }"
      />
      <CSidebarNavItem
        icon="cil-inbox"
        name="Spam"
        :badge="{ text: 25, color: 'warning' }"
      />
      <CSidebarNavItem
        to="/"
        class="mt-auto"
        icon="cil-speedometer"
        name="Dashboard"
        :badge="{ text: 'NEW', color: 'info' }"
      />
    </CSidebarNav>
    <CSidebarMinimizer
      class="c-d-md-down-none"
      @click.native="minimized = !minimized"
    />
  </CSidebar>
</template>

<script>
export default {
  name: 'EmailSidebar',
  data () {
    return {
      minimized: false
    }
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow
    },
    minimize () {
      return this.$store.state.sidebarMinimize
    }
  }
}
</script>
