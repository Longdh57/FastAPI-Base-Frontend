<template>
  <div>
    <notifications :duration="2000"/>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
