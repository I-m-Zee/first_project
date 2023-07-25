<template>
    <h1>Email: {{email}}</h1>
    <h1>Number:  {{ mobile=9663 }}</h1>
    <h1>Name: {{ getName("My Name") }}</h1>
</template>
<script>
// Working in Same Compoenent
export default {
    name: "FirstProject",
    data() {
        return {
            email: "abc@gmail.com",
            mobile: "9562256",
            getName: function (param) {
                return param
            }
        }
    }
}
</script>
<style scoped>
h1 {
    color: aqua;
}
</style>