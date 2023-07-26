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
            display: false,
            background:false
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
        },
        showChild() {
            this.display = !this.display
        }
    }
}
</script>
<template>
    <div v-if="display">
        <TwoWay />
    </div>
    <!-- <h1>Email: {{ email }}</h1>
    <h1>Number: {{ mobile=9663 }}</h1>
    <h1>Name: {{ getName("My Name") }}</h1>
    <h1>Name: {{ getName("Your Name") }}</h1>
    <h1>Name: {{ getName("Your Name") }}</h1>
    <h1>Data Email: {{ getData().email }}</h1>
    <h1>Data Number: {{ getData().mobile }}</h1> -->
    <!-- Frist way to capture events -->
    <!-- <button @click="click()">Click Here</button> -->
    <!-- <h1 @mousemove="callConsole()">Home Page</h1> -->
    <!-- Second way to capture events -->
    <!-- <button v-on:click="click()">Click Here</button>
        <h1 v-on:mousemove="callConsole()">Home Page</h1> -->
    <!-- <hr> -->
    <!-- <button type="button" @click="showChild()">Toggle Child Component</button> -->
    <!-- Rendering Tag as HTML -->
    <h1 v-html="email"></h1>
    <h3 v-html="mobile"></h3>
    <h5 v-html="email"></h5>
    <!-- Dynamic Class Binding -->
    <h1>Dynamic Class Binding</h1>
    <h3 :class="{change:background}">Background Color</h3>
    <button type="button" @click="background=!background">Change Color</button>
</template>

<style scoped>
h1 {
    color: aqua;
}
.change{
    font-size: larger;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: blueviolet;
}
</style>