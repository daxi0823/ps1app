<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <p><button @click="increment()">+</button></p>
    <li v-for="task in taskFalseList" :key="task.id">
      <input type="checkbox" :aria-checked="task.done">{{ task.name }}
    </li>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    // stateもgettersもcomputedで受けるのが基本
    mounted() {
      // actionsの呼び出しにはdispatch
      this.$store.dispatch('fetchItems')
    },
    computed: {
      count() {
        return this.$store.state.count
      },
      tasks() {
        // storeのstateのtasksを取得する
        return this.$store.state.tasks
      },
      taskTrueList() {
        return this.$store.getters.filterdTaskTrue
      },
      taskFalseList() {
        return this.$store.getters.filterdTaskFalse
      },
    },
    methods: {
      // mutationsの時はcommitを使う
      increment() {
        this.$store.commit('increment')
      },
      countReset() {
        this.$store.commit('countReset')
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
