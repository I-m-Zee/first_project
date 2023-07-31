<template>
    <h1>Parent Component</h1>
    <h3>VUE Life Cycle Methods</h3>
    <h6 ref="add">{{ count }}</h6>
    <button type="button" @click="count++; displayChild = !displayChild">Update</button>
    <childSlot v-if="displayChild">
        <!-- <template #header>
            <h1>Header Part</h1>
        </template>
        <template #section>
            <h1>A Section Part</h1>
        </template>
        <template #main>
            <h1>Main Part</h1>
        </template>
        <template #footer>
            <h1>Footer Part</h1>
        </template> -->
    </childSlot>
</template>

<script>
import childSlot from './childSlot.vue';
export default {
    name: 'parentComponent',
    components: {
        childSlot
    },
    data() {
        // console.log("Component Created")
        return {
            count: 0,
            displayChild: false
        }
    },
    computed: {
    },
    // VUE Life Cycle Hooks
    // beforeCreate() {
    //     alert('Before Created!')
    // },
    // created() {
    //     alert('Created')
    // },
    // beforeMount() {
    //     console.log('This is beforeMounted', this.$el)
    // },
    // mounted() {
    //     console.log('This is Mounted', this.$el)
    // },
    // beforeUpdate() {
    //     console.log("Before Update: ", this.$refs['add'].textContent)
    // },
    // updated() {
    //      console.log("Update: ", this.$refs['add'].textContent)
    // },
    // beforeUnmount() {
    //     console.log('Before Unmount', this.$.refs['child'])
    // },
    // unmounted() {
    //     console.log('Unmount', this.$.refs['child'])
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
