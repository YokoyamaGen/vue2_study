<template>
  <div class="main-list-wrapper">
    <ul class="main-list">
      <Listitem v-for="dream in dreams" :dream="dream" :key="dream.id"></Listitem>
    </ul>
  </div>
</template>
<script>
import Listitem from './ListItem.vue'

export default {
  name: 'ListName',
    components: {
    Listitem,
  },
  data: function() {
    return {
      dreams: [
        {
          id: 1,
          name: "フルスタックエンジニアになりたい"
        },
        {
          id: 2,
          name: "バックエンドエンジニアになりたい"
        },
        {
          id: 3,
          name: "フロントエンドエンジニアになりたい"
        },
        {
          id: 4,
          name: "データサイエンティストになりたい"
        },
        {
          id: 5,
          name: "スティーブ・ジョブズになりたい"
        },
      ]
    }
  }
}
</script>
<style>
  .main-list-wrapper{
    background: #fff;
    width: 80%;
    margin: 2rem auto;
    border-radius: 15px;
  }
  .main-list {
    padding: 2rem;
    text-align: left;
  }
</style>