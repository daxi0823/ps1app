<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="moveUserPage()">userページへ</button>
  </div>
</template>

<script>
export default {
  methods: {
    moveUserPage() {
      this.$router.push({ name: 'user', params: { userId: 123 }})
      console.log(this.$router)
    }
  }
}
</script>
