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

