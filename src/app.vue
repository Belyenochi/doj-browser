
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div style="width: 700px; height: 300px; margin: auto; position: relative;">
      <loader></loader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from '@/components/loader'

export default {
  name: 'App',
  components: {
    Loader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
