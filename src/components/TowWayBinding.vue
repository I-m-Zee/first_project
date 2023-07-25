<script>
export default {
    name: "TwoWay",
    data() {
        return {
            count:5895,
        }
    }
}
</script>
<template>
    <h1>Two Way Binding</h1>
    <input type="text" name="twoWay" id="twoWay" placeholder="Write Number here" v-model="count">
    <h2>{{ count }}</h2>
</template>
<style scoped>
h1{
    color: blue;
}
h2{
    color: blueviolet;
}
</style>