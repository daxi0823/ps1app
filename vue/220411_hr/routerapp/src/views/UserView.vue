<template>
  <div>
    <h1>User Page</h1>
    <!-- ここ確認 -->
    <p>{{ $route.params.userId }}</p>
    <button @click="routeViews()">BTN</button>
  </div>
</template>

<script>
export default {
  methods: {
    routeViews() {
      console.log(this.$route)
    }
  }
}



</script>
