<template>
    <h1 ref="child">Child Slot</h1>
    <div>
        <slot name="header"></slot>
    </div>
    <section>
        <slot name="section"></slot>
    </section>
    <main>
        <slot name="main"></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</template>

<script>
export default {
    name: 'ChildSlot',
    props: {
        msg: String
    },
    data() {
        return {
        }
    },
    created() {
    },
    // VUE Life Cycle Hooks
    //  beforeMount() {
    //     console.log('This is beforeMounted',  this.$.refs['child'])
    // },
    // mounted() {
    //     console.log('This is Mounted',  this.$.refs['child'])
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
