<template>
  <div class="game">
    <h1>ゲーム詳細</h1>
    <input type="text" v-model="inputText">
    <ul class="gamelist">
      <li v-for="(item, index) in gameSearchResult" :key="index">
        ID：{{ item.id }}<br>
        ゲーム名：{{ item.name }}<br>
        ¥{{ item.price }}<br>
        発売日：{{ item.release }}
      </li>
    </ul>

  </div>
</template>



<script>
import datas from '../ps1.json'

export default {
  data() {
    return {
      gameDatas: datas,
      inputText: ''
    }
  },
  computed: {
    gameSearchResult() {
      // filter((item)のitemは？
      let result = this.gameDatas.filter((item) => {
          return item.name.indexOf(this.inputText) != -1
      })
      return result
  }
}
}

</script>


