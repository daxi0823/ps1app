import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
  // ココ
  state: {
    // vueファイルにとってのdata()部分
    tasks: [
      { id: 1, name: '牛乳を買う', done: false },
      { id: 2, name: 'Vue.jsの本を買う', done: true }
    ],
    count: 0,
  },
  mutations: {
    // stateを更新する処理
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
  actions: {
    // 外部APIとのやりとり用
    fetchItems({ commit, }) {
      return axios.get('https://www.googleapis.com/books/v1/volumes?q=vue')
      .then(response => {
        // receiveItemsに、response.dataで取得したデータを代入
        commit('receiveItems', response.data)
      })
    }
  },
  getters: {
    // vueファイルにとってのcomputed or filters部分
    filteredTaskTrue(state) {
      return state.tasks.filter((item) => {
        return item.done === true
      })
    },
    filteredTaskFalse(state) {
      return state.tasks.filter((item) => {
        return item.done === false
      })
    },
  }
})

export default store