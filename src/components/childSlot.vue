<template>
    <h1>Child Slot</h1>
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
