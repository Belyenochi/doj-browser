
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="loader-wrapper">
      <loader size="32px" border="4px"></loader>
    </div>
    <div class="loader-wrapper">
      <loader size="2rem" :indeterminate="true">
        <i>这就很尴尬了😓</i>
      </loader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from '@/general/loader'

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
  margin: 16px auto;
  width: 512px;
  height: 128px;
  position: relative;

  background-image: linear-gradient(to right, @karakurenai, @indigo-500);
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
