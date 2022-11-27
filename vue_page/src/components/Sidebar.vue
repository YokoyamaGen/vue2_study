<template>
  <div class="sidebar-container">
    <h1>Sidebar.vue</h1>
    <NavList></NavList>
  </div>
</template>

<script>
import NavList from './NavList.vue'

export default {
  name: 'SidebarPage',
    components: {
      NavList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar-container {
    width: 20%;
    background: #fff;
  }
  .sidebar-container h1 {
    padding-top: 50px;
  }
</style>
