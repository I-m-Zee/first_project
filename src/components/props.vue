<template>
    <h1>Props</h1>
    <NonProperties someValue="Form Props" id="name" />
</template>
<script>
import NonProperties from './non-props.vue'
export default {
    name: "DefineProps",
    props: {
        someValue: String
    },
    data() {
        return {

        }
    },
    components: {
        NonProperties
    }
}
</script>
<style></style>