<template>
    <button @click="$emit('onClick')" :class="['btn', $props.type]">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: ["type"],
    emits: ['onClick'],
    name: "ToDoButton",
}
</script>
<style scoped lang="scss">
    .btn {
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &.green {
            width: 300px;
            height: 40px;
            background-color: green;
            border: 2px solid green;
            color: white;

            &:hover {
                background-color: #fff;
                color: green;
                border-color: green;
            }
        }

        &.red {
            width: 100px;
            height: 30px;
            background-color: red;
            border: 2px solid red;
            color: white;

            &:hover {
                background-color: #fff;
                color: red;
                border-color: red;
            }
        }

        &.yellow {
            width: 100px;
            height: 30px;
            background-color: rgb(184, 184, 4);
            border: 2px solid rgb(184, 184, 4);
            color: white;

            &:hover {
                background-color: #fff;
                color: rgb(184, 184, 4);
                border-color: rgb(184, 184, 4);
            }
        }
    }
</style>