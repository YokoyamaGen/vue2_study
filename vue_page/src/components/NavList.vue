<template>
  <div>
    <nav class="nav-list-wrapper">
      <ul class="nav-list">
        <li class="nav-list-item"><a href="#">リンク1</a></li>
        <li class="nav-list-item"><a href="#">リンク2</a></li>
        <li class="nav-list-item"><a href="#">リンク3</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavList',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-list-wrapper {
    padding: 10px;
  }
  .nav-list-item {
    list-style: none;
    padding: 8px 0;
  }
  .nav-list-item a {
    color: #40b983;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
  }
  .nav-list-item a:hover{
    background: #40b983;
    opacity: .8;
    color: #fff;
  }
  </style>
