<template>
    <div>{{ title }}</div>
    <br>
    <button v-on:click="counter++">+</button>
    <span>{{ counter }}</span>
    <button v-on:click="counter = counter - 1">-</button>
</template>

<script>
    export default {
        name: 'Counter',
        data() {
            return {
                counter: 0,
                title: 'Счетчик'
            }
        },
    }
</script>