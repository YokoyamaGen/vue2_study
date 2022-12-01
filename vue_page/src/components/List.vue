<template>
  <div>
    <div class="main-form-wrapper">
      <form v-on:submit.prevent="addDream">
        <input type="text" v-model="newDreamName" class="form-input" placeholder="あなたの夢を追加してください">
        <input type="submit" class="form-submit">
      </form>
    </div>
    <div class="main-list-wrapper">
      <ul class="main-list">
        <Listitem v-for="dream in dreams" :dream="dream" :key="dream.id"></Listitem>
      </ul>
    </div>
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
      ],
      newDreamName: "",
    }
  },
  methods: {
    addDream: function() {
      const last_id = this.dreams[this.dreams.length -1].id += 1;
      this.dreams.push({id: last_id, name: this.newDreamName});
      this.newDreamName = "";
    }
  }
}
</script>
<style>
  .main-list-wrapper, .main-form-wrapper{
    background: #fff;
    width: 80%;
    margin: 2rem auto;
    border-radius: 15px;
  }
  .main-list {
    padding: 2rem;
    text-align: left;
  }
  .main-form-wrapper .form-input {
    width: 30%;
    margin: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 40px;
    padding-left: 8px;
  }
  .main-form-wrapper .form-submit {
    background: #40b983;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
  }
</style>