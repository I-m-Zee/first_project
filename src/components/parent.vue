<template>
    <h1>Parent Component</h1>
    <childSlot>
        <template #header>
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
        </template>
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
        return {
        }
    },
    computed: {
    },
    created() {
    }
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
