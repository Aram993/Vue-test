<template>
    <div>
        Main component
        <br>
        <div style="display: flex; flex-direction: column; gap: 20px">
            <Parent v-for="item in todoes" :title="item.title"/>
            <Button>{{ todoes[0].title }}</Button>
            <Button>Read news 2</Button>
            <Button>
                <strong>1234</strong>
            </Button>
        </div>
    </div>
</template>
<script>
import Parent from './Parent.vue';
import Button from './Button.vue';
export default {
    components: {Parent, Button},
    data() {
        return {
            todoes: [{id: 1, title: '123123'}, {id: 2, title: '4656454'}, {id: 3, title: '789789'}]
        }
    },
    provide() {
        return {
            todoList: this.todoes
        }
    },
}
</script>
<style lang="scss">
    
</style>