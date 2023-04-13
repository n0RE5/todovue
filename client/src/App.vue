<template>
  <div class="app">
    <router-view v-if="!$store.state.auth.isLoading"></router-view>
  </div>
</template>

<script>

export default {
  mounted() {
    this.$store.dispatch('check')
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

.app {
    padding: 50px 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
