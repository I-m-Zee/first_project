<script>
import MultipleTwoWayBinding from './multiple-twoway-binding.vue'
export default {
    name: "TwoWay",
    components: {
        MultipleTwoWayBinding
    },
    data() {
        return {
            count: 5895,
        }
    },
    methods: {
        pasData() {
            alert('Function from Parent')
        }
    }
}
</script>
<template>
    <h1>Two Way Binding</h1>
    <input type="text" name="twoWay" id="twoWay" placeholder="Write Number here" v-model="count">
    <h2>{{ count }}</h2>
    <hr>
    <MultipleTwoWayBinding test="Parent Called" :getData="pasData" />
</template>
<style scoped>
h1 {
    color: blue;
}

h2 {
    color: blueviolet;
}
</style>