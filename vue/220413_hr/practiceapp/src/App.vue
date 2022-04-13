<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <p><button @click="increment()">+</button><button @click="countReset()">Reset</button></p>
    <ul>
      <li v-for="task in taskFalseList" :key="task.id">
        <input type="checkbox" :checked="task.done">
        {{ task.name }}
      </li>
    </ul>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    tasks() {
      // storeのstateのtasksを取得する
      return this.$store.state.tasks
    },
    taskTrueList() {
      return this.$store.getters.filteredTaskTrue
    },
    taskFalseList() {
      return this.$store.getters.filteredTaskFalse
    }
  },
  methods: {
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
