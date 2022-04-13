import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // vueファイルにとってのdata()部分
  state: {
    tasks: [
      { id: 1, name: '牛乳を買う', dane: false},
      { id: 2, name: 'Vue.jsの本を買う', done: true}
    ]
  },
  // stateを更新する処理
  // 変更する処理は全てここで行うが、逆に普通のvueファイル内からデータの変更はできない
  mutations: {},

  // 外部APIとのやりとり用
  actions: {},

  // vueファイルにとってのcomputed or filters部分
  getters: {},
})

export default store
