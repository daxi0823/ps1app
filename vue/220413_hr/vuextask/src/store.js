import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store( {
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        labelIds: [1, 3],
        done:true
      },
    ],

    labels: [
      {
        id: 1,
        text: '買い物'
      },
      {
        id: 2,
        text: '食料'
      },
      {
        id: 3,
        text: '本'
      },
    ],

    // 次に追加するタスク、ラベルのID
    // 実際のアプリでは、サーバーで生成したり、UUIDを使ったりする

    nextTaskId: 3,
    nextLabelId: 4,

    // フィルタするラベルのID
    filter: null
  },

  getters: {
    // フィルタ後のタスクを返す
    filteredTasks(state) {
      // ラベルが選択されていなければ、そのままの一覧を返す
      if(!state.filter) {
        return state.tasks
      }

      // 選択されているラベルでフィルタリングする
      return state.tasks.filter(task => {
        return task.labelIds.indexOf(state.filter) >= 0
      })
    }
  },

  mutations: {
    addTask (state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false
      })

      state.nextTaskId++
    },

    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })

      filtered.forEach(task => {
        task.done = !task.done
      })
    },

    addLabel (state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })

      // 次に追加されるラベルに付与するIDを更新する
      state.nextLabelId++
    },

    // フィルタリング対象のラベルを変更する
    changeFilter(state, { filter }) {
      state.filter = filter
    },

    // ステートを復元する
    restore (state, { tasks, labels, nextTaskId, nextLabelId }) {
      state.tasks = tasks
      state.labels = labels
      state.nextTaskId = nextTaskId
      state.nextLabelID = nextLabelId
    }
  },

  actions: {
    // ローカルストレージにステートを保存する
    save ({ state }) {
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskId: state.nextTaskId,
        nextLabelId: state.nextLAbelId
      }
      localStorage.setItem('task-app-data', JSON.stringify(data))
    },

    // ローカルストレージからステートを復元する
    restore({ commit }) {
      const data = localStorage.getItem('task-app-data')
      if(data) {
        commit('restore', JSON.parse(data))
      }
    }
  }
})

export default store

