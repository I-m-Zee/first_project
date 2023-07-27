<template>
    <h1>Non Props</h1>
    {{ someValue }}
    <div v-bind="$attrs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nisi adipisci optio aperiam nostrum alias veritatis ratione odio, tempore at eius ex animi magnam architecto sint et, placeat cupiditate reprehenderit?
    </div>
</template>
<script>
export default {
    name: "NonProperties",
    props: {
        someValue: String
    }
}
</script>
<style></style>