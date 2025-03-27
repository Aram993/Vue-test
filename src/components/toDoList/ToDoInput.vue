<template>
    <input type="text" autofocus :placeholder="placeholderValue" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>
<script>
    export default {
        props: ["placeholderValue", "modelValue"],
        emits: ['update:modelValue'],
        name: "ToDoInput",
        data() {
            return {

            }
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