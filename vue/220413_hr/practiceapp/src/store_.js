import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // vueファイルにとってのdata()部分
  state: {
    tasks: [
      { id: 1, name: '牛乳を買う', dane: false},
      { id: 2, name: 'Vue.jsの本を買う', done: true}
    ],
    count: 0,
    items: [],
  },
  // stateを更新する処理
  // 変更する処理は全てここで行うが、逆に普通のvueファイル内からデータの変更はできない
  mutations: {
    increment(state) {
      state.count++
    },
    countReset(state) {
      state.count = 0
    },
    receiveItems(state, datas) {
      // datasは、receiveItems
      state.items = datas
    }
  },

  // 外部APIとのやりとり用
  actions: {
    fetchItems({ commit, }) {
      return axios.get('https://www.googleapis.com/books/v1/volumes?q=vue')
      .then(response => {
        // receiveItemsに、response.dataで取得したデータを代入
        commit('receiveItems', response.data)
      })
    }
  },

  // vueファイルにとってのcomputed or filters部分
  getters: {
    // gettersのメソッドの引数には必ずstateを入れる
    filterdTaksTrue(state){
      return state.tasks.filter((item) => {
        return item.done === true
      })
    },
    filterdTaksFalse(state){
      return state.tasks.filter((item) => {
        return item.done === false
      })
    },
  },
})

export default store
