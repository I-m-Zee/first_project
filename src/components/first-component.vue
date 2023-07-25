<script>
// Working in Same Compoenent
// Option API
import TwoWay from './TowWayBinding.vue'
export default {
    name: "FirstProject",
    components: {
        TwoWay
    },
    data() {
        return {
            email: "abc@gmail.com",
            mobile: "9562256",
        }
    },
    methods: {
        getName(param) {
            return param
        },
        getData() {
            return {
                email: "abc@gmail.com",
                mobile: "9562256",
            }
        },
        click() {
            alert("How Are you?")
        },
        callConsole() {
            console.error("Hey There You are!")
        }
    }
}
</script>
<template>
    <h1>Email: {{email}}</h1>
    <h1>Number:  {{ mobile=9663 }}</h1>
    <h1>Name: {{ getName("My Name") }}</h1>
    <h1>Name: {{ getName("Your Name") }}</h1>
    <h1>Name: {{ getName("Your Name") }}</h1>
    <h1>Data Email:  {{ getData().email }}</h1>
    <h1>Data Number:  {{ getData().mobile }}</h1>
    <!-- Frist way to capture events -->
    <button @click="click()">Click Here</button>
    <!-- <h1 @mousemove="callConsole()">Home Page</h1> -->
    <!-- Second way to capture events -->
    <!-- <button v-on:click="click()">Click Here</button>
    <h1 v-on:mousemove="callConsole()">Home Page</h1> -->
    <hr>
    <TwoWay/>
</template>

<style scoped>
h1 {
    color: aqua;
}
</style>