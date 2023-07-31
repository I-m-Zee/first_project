<template>
    <h1>{{ login }} has Logged in</h1>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    name: 'login-com',
    data() {
        return {
            login: ''
        }
    },
    mounted() {
        const route = useRoute()
        console.table('Name',route.params['m'])
        this.login = route.params['m']
    },
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
