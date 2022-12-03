import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dreams: [
      {
        id: 1,
        name: "フルスタックエンジニアになりたい",
      },
      {
        id: 2,
        name: "バックエンドエンジニアになりたい",
      },
      {
        id: 3,
        name: "フロントエンドエンジニアになりたい",
      },
      {
        id: 4,
        name: "データサイエンティストになりたい",
      },
      {
        id: 5,
        name: "スティーブ・ジョブズになりたい",
      },
    ],
  },
  getters: {},
  mutations: {
    addDream(state, payload) {
      state.dreams.push(payload.dream);
    }
  },
  actions: {},
  modules: {},
});
