<template>
  <div id="app">
    <!-- v-model よしなに必要な情報をとってくれる？
    input textの場合は -->

    <div>
      <!-- nameはv-modelに変換 -->
      <p><input type="radio" v-model="releaseYear" id="1996" value="1996"><label for="1996">1996年</label></p>
      <p><input type="radio" v-model="releaseYear" id="1997" value="1997"><label for="1997">1997年</label></p>
      <p><input type="radio" v-model="releaseYear" id="1998" value="1998"><label for="1998">1998年</label></p>
      <p><input type="radio" v-model="releaseYear" id="1999" value="1999"><label for="1999">1999年</label></p>
      <p><input type="radio" v-model="releaseYear" id="2000" value="2000"><label for="2000">2000年</label></p>
      <p><input type="radio" v-model="releaseYear" id="all" value="all"><label for="all">全年代</label></p>
    </div>
    <p><input type="text" v-model="inputText"></p>
    <p>{{ gameSearchResult.length }}件 見つかりました！</p>
    <ul class="pagenation">
      <li v-for="(item, index) in gameSearchResult" :key="index">{{ index }}.「{{ item.name }}」{{ item.price }}円, 発売日{{ item.release }}</li>
      <!-- in datas：datasから、
      v-for="(item, index)：itemというオブジェクトを
      {{ item.name }}：繰り返し取得
      
      index：繰り返しの回数を取得？
      ※通常はidを基準とするが、今回はidがユニークではないので、indexで取得している
      v-forは繰り返しを行うが、あくまでユニークでないとできない -->
    </ul>
  </div>
</template>

<script>
// ps1という名前で、ps1.jsonを読み込む
import ps1 from './ps1.json'

export default {
  name: 'App',
  data() {
    return {
      // datasという変数にps1の内容を代入する
      datas: ps1,
      inputText: '',
      // 最初に選ばれていて欲しい
      // 質問なぜ文字？
      releaseYear: '1996',

    }
  },

  computed: {
    // computed:常に実行されているイメージ
    gameSearchResult() {
      // filter() 条件に一致するものを抽出
      const result = this.datas.filter((item) => {
        // indexOf：ある場合に、指定された値が最初に現れたインデックスを返す
        // 

        // -1 indexOfで、合致するものがない場合の結果

        // 以下 filterの条件式、ifの中の式みたいな
        // != 〜でないときに
        // return item.name.indexOf(this.inputText) != -1

        // 下記は簡単な例
        // return item.price >= 8000

      //   return item.release >= '1996/1/1' && item.release <= '1996/12/31'
      // })


        // 変数を呼び出すので、「this」必須！！！
        if(this.year == "1996") {
          return item.release >= '1996/1/1' && item.release <= '1996/12/31'
        } else if(this.year == "1997") {
          return item.release >= '1997/1/1' && item.release <= '1997/12/31'
        } else if(this.year == "1998") {
          return item.release >= '1998/1/1' && item.release <= '1998/12/31'
        } else if(this.year == "1999") {
          return item.release >= '1999/1/1' && item.release <= '1999/12/31'
        } else if(this.year == "2000") {
          return item.release >= '2000/1/1' && item.release <= '2000/12/31'
        } else {
          return item
        }


      })

      return result
    }
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
</style>
