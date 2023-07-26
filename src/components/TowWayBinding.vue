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
            techStack: ['Java', 'PHP', 'Python', 'C-Sharp', 'Angular', 'React', 'Vue'],
            techStacks: [
                { type: 'Backend', lang: 'Java' },
                { type: 'Backend', lang: 'PHP' },
                { type: 'Backend', lang: 'Python' },
                { type: 'Backend', lang: 'C-Sharp' },
                { type: 'Frontend', lang: 'Angular' },
                { type: 'Frontend', lang: 'Vue' },
                { type: 'Frontend', lang: 'React' }
            ]
        }
    },
    methods: {
        pasData() {
            alert('Function from Parent')
        },
        onClickButton(event) {
            alert(event)
        }
    }
}
</script>
<template>
    <h1>Two Way Binding</h1>
    <input type="text" name="twoWay" id="twoWay" placeholder="Write Number here" v-model="count">
    <h2>{{ count }}</h2>
    <hr>
    <MultipleTwoWayBinding test="Parent Called" :getData="pasData" :techStack="techStack" :techStacks="techStacks" @clicked="onClickButton($event)"/>
</template>
<style scoped>
h1 {
    color: blue;
}

h2 {
    color: blueviolet;
}
</style>