<template>
  <div class="games">
    <h1>Gamesページです</h1>
    <!-- 
    $route.params：
    .gamesId：
    -->
    <p>{{ $route.params.gamesId }}</p>
    <p>ID：{{ gamesId }}</p>
    <p>タイトル：{{ filteredData.name }}</p>
    <p>発売日：{{ filteredData.release }}</p>
    <p>金額：{{ filteredData.price }}</p>
    <ul>
      <li v-for="(item, index) in releaseSomeData" :key="index" >{{ item.name }}{{ item.price }}</li>
    </ul>
  </div>
</template>


<script>
import datas from '../ps1.json'

export default {
  data() {

    return {
      gameDatas: datas
    }
  },
  filters: {
    comma() {
      return 0
    }
  },
  computed: {
    gamesId() {
      return this.$route.params.gamesId
    },
    filteredData() {
      return this.gameDatas.find((item) => {
        return item.id === this.$route.params.gamesId
      })
    },
    releaseSomeData() {
      return this.gameDatas.filter((item) => {
        return item.release === this.filteredData.release
      })
    }
  }
}


</script>


