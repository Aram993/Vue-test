<template>
    <div class="taskToDo">
        <span class="taskToDo-date">{{ taskData.date }}</span>
        <div class="taskToDo-name">
            <label :for="index" :class="{'lineThrough': taskData.done}">{{ taskData.name }}</label>
            <input type="checkbox" class="taskInpt" :id="index" :checked="taskData.done" @change="$emit('changeInput', item)">
        </div>
        <ToDoButton type="red" @click="$emit('deleteTask', index)">Удалить</ToDoButton>
        <ToDoButton type="yellow" @click="$emit('toggleModal', index)">Изменить</ToDoButton>
    </div>
</template>
<script>
import ToDoButton from './ToDoButton.vue';

export default {
    props: [ "taskData", "index",],
    emits: ["deleteTask", "changeInput", "toggleModal"],
    components: {ToDoButton},
    name: "ToDoTask",
    data() {
        return {

        }
    }, methods: {
        
    }
}
</script>
<style lang="scss" scoped>
    .taskToDo {
        background-color: #fff;
        border: 2px solid black;
        font-weight: bolder;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px;
        padding: 5px;
        width: 100%;

        &-date {
            color: blue;
        }

        &-name {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 300px;
            gap: 15px;

            > label {
                width: 250px;
                cursor: pointer;
            }
        }
    }

    .taskInpt {
        height: 30px;
        width: 30px;
        cursor: pointer;
    }

    .lineThrough {
        text-decoration: line-through;
    }
</style>