<template>
    <button @click="$emit('getEmployees')">{{ buttonValue }}</button>
</template>
<script>
export default {
    props: ["buttonValue"],
    emits: ["getEmployees"],
    name: "EmployeesButton",
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    button {
        width: 250px;
        height: 40px;
        background-color: #aaa;
        color: white;
        border-radius: 10px;
        transition: 0.3s all;
    }

    :hover {
        box-shadow: 5px 5px 5px 5px;
        cursor: pointer;
        background-color: #bbb;
    }
</style>