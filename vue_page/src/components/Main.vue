<template>
  <div class="main-container">
    <h1>Main.vue</h1>
    <list></list>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'MainPage',
    components: {
    List,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container {
    width: 80%;
    background: #ddd;
  }
  .main-container h1 {
    padding-top: 50px;
  }
</style>
