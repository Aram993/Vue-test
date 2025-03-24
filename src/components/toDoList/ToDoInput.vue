<template>
        <input type="text" autofocus :placeholder="placeholderValue" :value="myValue">
</template>
<script>
    export default {
        props: ["placeholderValue", "myValue"],
        name: "ToDoInput",
        data() {
            return {

            }
        }, methods: {

        }
    }
</script>
<style scoped>
    input {
        width: 500px;
        padding-left: 10px;
        height: 30px;
        outline: none;
        border: 2px solid brown;
        border-radius: 10px;
        color: darkred;
    }
</style>