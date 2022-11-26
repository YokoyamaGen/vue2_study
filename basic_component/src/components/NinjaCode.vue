<template>
  <div>
    <h1>This is NinjaCode Component!</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'NinjaCode',
  props: ['text'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
