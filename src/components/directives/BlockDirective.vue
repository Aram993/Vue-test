<template>
    <div>
        Dirtective
        <input type="text" v-focus>
        <div v-color:[type].blink="color" v-if="isShownBlock">Some text</div>
        <button @click="color = 'red'">Red</button>
        <button  @click="color = 'blue'">Blue</button>
        <button @click="type = type === 'color' ? 'backgroundColor' : 'color'">Change type</button>
        <button @click="isShownBlock = !isShownBlock">Change visibility</button>
        <div v-copy.alert="'text 2'">1 text</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: 'red',
            type: 'color',
            isShownBlock: true
        }
    }
}
</script>
<style lang="scss">
    
</style>