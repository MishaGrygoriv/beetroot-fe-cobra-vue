<template>
  <div class="app">
<main-layout>
  <router-view/>
</main-layout>
  </div>
</template>
<script>
import MainLayout from './components/layout/MainLayout'

  export default {
    components: {
      MainLayout,
    }
  }
</script>

<style lang="scss">
.app {
  display: flex;
  min-height: 100vh;
}
</style>
