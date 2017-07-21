
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="loader-wrapper">
      <loader></loader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from '@/components/commons/loader'

export default {
  name: 'App',
  components: {
    Loader,
  }
}
</script>

<style lang="less">
@import './styles/index';

.loader-wrapper {
  width: 700px;
  height: 300px;
  margin: auto;
  position: relative;

  background-image: linear-gradient(to right, @fujimurasaki, @indigo-500);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
