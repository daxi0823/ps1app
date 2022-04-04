<template>
  <div class="task">
    <h1>タスク一覧</h1>
    <ul>
      <div>
        <input type="text" v-model="inputText"><button @click="addTask()">タスク追加</button>
      </div>
      <div>
        <button @click="loadData()">LOAD</button>
        <button @click="saveData()">SAVE</button>
      </div>
      <li v-for="(task, index) in doneTaskList" :key="index">
        <!-- このv-forの中身は？ -->
        <!-- task：変数 -->
        {{ task.name }} : 
        <button @click="doneTask(task.name)">完了</button>
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
        { name: 'ゲームを買う', done: false},
        { name: 'ゲームをする', done: false},
        { name: '寝る', done: true}
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
      // nameにinputTextを、doneにfalseを出力する

      // tasksに追加したいので、thisでtasksを呼び出す
      // pushで追加
      // nameはinputTextを、thisで呼び出す
      this.tasks.push({name:this.inputText, done: false})
      this.inputText = ''
    },

    delTask(taskName) {
      console.log(taskName)
      // this.tasksの中から、nameがtaskNameと違うものだけを集めた配列を作る
      // filterを使って、上記を実現 取り出している
      // 一致していないものを、１件ずつresultArrayに代入している
      // その全てを、tasksに代入している
      const resultArray = this.tasks.filter((item) => {
        // itemは、filterで頻用する変数。 
        // filterのときは ===。 これが厳密 ==の時は、若干近い内容も一致と判断
        return item.name != taskName
      })

      // resultArrayの内容を、tasksに代入する
      this.tasks = resultArray
    },
    saveData() {
      // 
      // JSON.stringify(this.tasks)：json形式のを、文字データに変換
      // JSON形式＝object形式
      // ここでのtasksは、保存時に代入する変数のイメージ
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadData() {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    },
    doneTask(taskname) {
      const result = this.tasks.findIndex((item) => {
        return item.name ===taskname
      })
      console.log(result)
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


