<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to first VUE3 project"/>
  <FirstProject/>
  <exampleForm/> -->
    <DefineProps/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FirstProject from './components/first-component.vue'
// import exampleForm from './components/example-form.vue';
import DefineProps from './components/props.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // FirstProject,
    // exampleForm
    DefineProps

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
