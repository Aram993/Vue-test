<template>
    <div>Todo List</div>
    <br>
    <input type="text" v-bind:placeholder="placeholderText" v-bind:value="inputValue" v-on:input="onInputChange" v-on:keydown.enter="addTodoItem">
    <br>
    <br>
    <button v-on:click="addTodoItem">Добавить</button>
    <br>
    <br>
    <div>Список задач</div>
    <ul>
       <div style="display: flex; gap: 20px;" v-for="(item, index) in notes">
            <li>{{ index + 1 }}. {{ item }}</li>
            <button v-on:click="onDeleteNote(index)">Удалить</button>
       </div>
    </ul>
    <a href="https://google.com" v-on:click.prevent="onLinkPress">Google</a>
</template>

<script>
    export default {
        name: 'TodoList',
        data() {
            return {
                placeholderText: 'Type your text',
                inputValue: '',
                notes: ['Learn js', 'Learn TS']
            }
        },
        methods: {
            onInputChange(event) {
                this.inputValue = event.target.value;
            },
            addTodoItem() {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            },
            onLinkPress() {
                alert(1)
            },
            onDeleteNote(index) {
                this.notes.splice(index, 1)
            },
        }
    }
</script>


<style>

</style>