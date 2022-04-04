<template>
  <div class="task">
    <h1>タスク一覧</h1>
    <div><input type="text" v-model="inputText">
    <button @click="addTask()">タスク追加</button></div>
    <div>
      <button @click="loadData()">LOAD</button>
      <button @click="saveData()">SAVE</button>
      <button @click="removeData()">REMOVE</button>
    </div>
    <ul>
      <li v-for="(task, index) in doneTaskList" :key="index">
        {{ task.name }} : 
        <button @click="doneTask(task.name)">完了にする</button>
        <button @click="delTask(task.name)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      tasks: [
        { name: 'ゲームを買う', done: false },
        { name: 'ゲームをする', done: false },
        { name: '寝る', done: true }
      ]
    }
  },
  computed: {
    doneTaskList() {
      return this.tasks.filter((item) => {
        return item.done != true
      })
    }
  },
  methods: {
    addTask() {
      // tasksに入力された内容(inputText)を追加する
      // nameにinputTextを、doneにfalseを設定する
      this.tasks.push({ name: this.inputText, done: false })
      this.inputText = ''
    },
    delTask(taskName) {
      console.log(taskName)
      // this.tasksの中からnameがtaskNameと違うものだけを集めた配列を作る
      // filterを使って、上に書いた内容を実行する
      const resultArray = this.tasks.filter((item) => {
        return item.name != taskName
      })
      // resultArrayの内容をthis.tasksに代入する
      this.tasks = resultArray
    },
    saveData() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadData() {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    },
    removeData() {
      localStorage.removeItem('tasks')
    },
    doneTask(taskname) {
      const result = this.tasks.findIndex((item) => {
        return item.name === taskname
      })
      this.tasks[result].done = true
    }
  }
}
</script>

<style scoped>
  input[type="text"] {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
    margin: 3px;
  }
  button {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
    margin: 3px;
  }
  ul {
    margin: 0;
    padding: 0;
    border-top: 1px solid #ccc;
    margin-top: 3rem;
  }
  li {
    line-height: 3rem;
    border-bottom: 1px solid #ccc;
  }
</style>