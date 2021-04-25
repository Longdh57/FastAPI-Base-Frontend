<script>
export default {
  name: 'nav',
  computed: {
    sidebarItems () {
      return [{
        _name: 'CSidebarNav',
        _children: [{
            _name: 'CSidebarNavItem',
            name: this.$t('menu.dashboard'),
            to: '/dashboard',
            icon: 'cil-speedometer'
          }
        ]
      }]
    }
  }
}
</script>
