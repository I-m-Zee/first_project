<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to first VUE3 project"/>
  <FirstProject/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstProject from './components/first-component.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FirstProject,
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
  margin-top: 60px;
}
</style>
