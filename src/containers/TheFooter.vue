<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://longblog.xyz" target="_blank">LongBlog</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} </span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">FastAPI Base</span>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
