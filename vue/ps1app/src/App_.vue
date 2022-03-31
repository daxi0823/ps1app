<template>
  <div id="app">
    <div>
      <input type="radio" v-model="releaseYear" id="1996" value="1996" @click="nowPages = 0"><label for="1996">1996</label>
      <input type="radio" v-model="releaseYear" id="1997" value="1997" @click="nowPages = 0"><label for="1997">1997</label>
      <input type="radio" v-model="releaseYear" id="1998" value="1998" @click="nowPages = 0"><label for="1998">1998</label>
      <input type="radio" v-model="releaseYear" id="1999" value="1999" @click="nowPages = 0"><label for="1999">1999</label>
      <input type="radio" v-model="releaseYear" id="2000" value="2000" @click="nowPages = 0"><label for="2000">2000</label>
      <input type="radio" v-model="releaseYear" id="all" value="all" @click="nowPages = 0"><label for="all">ALL</label>
    </div>
    <input type="text" v-model="inputText">
    <p>{{ gameSearchResult.length }}件 見つかりました！</p>
    <ul class="pagination">
      <li v-for="n in pages" :key="n" @click="nowPages = n - 1">{{ n }}</li>
    </ul>
    <ul class="gamelist">
      <li v-for="(item, index) in gameSearchResultPages" :key="index">
        <a :href="'https://www.google.com/search?q=' + item.id" target="_blank">{{ item.name }}</a><br>{{ item.price }}円<br>{{ item.release }}
      </li>
    </ul>
  </div>
</template>

<script>
// ps1という名前でps1.jsonを読み込む
import ps1 from './ps1.json'

export default {
  name: 'App',
  data() {
    return {
      // datasという変数にps1の内容を代入する
      datas: ps1,
      inputText: '',
      releaseYear: 'all',
      nowPages: 0,
      
    }
  },
  computed: {
    gameSearchResult() {
      let result = this.datas.filter((item) => {
        if(this.releaseYear != 'all') {
          return item.release.indexOf(this.releaseYear) != -1 && item.name.indexOf(this.inputText) != -1
        } else {
          return item.name.indexOf(this.inputText) != -1
        }
      })
      return result
    },
    gameSearchResultPages() {
      return this.gameSearchResult.slice(this.nowPages * 100, this.nowPages * 100 + 100)
    },
    pages() {
      return Math.floor(this.gameSearchResult.length / 100) + 1
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul.gamelist, ul.pagination {
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
.gamelist li {
  width: 200px;
  font-size: 10px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 1px #ddd;
}
.pagination li {
  display: inline-block;
  width: 1.2rem;
  text-align: center;
  border: 1px solid #ddd;
  margin-right: .2rem;
  margin-bottom: .2rem;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] + label {
  display: inline-block;
  width: 3rem;
  line-height: 3rem;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 2px;
  cursor: pointer;
}

input[type="radio"]:checked + label {
  background-color: #faf;
}

input[type="text"] {
  display: inline-block;
  width: 18rem;
  line-height: 3rem;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 2px;
  padding: 0 1rem;
}
</style>
