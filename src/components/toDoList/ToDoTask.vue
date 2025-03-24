<template>
    <div class="taskToDo">
        <span class="taskToDo-date">{{ taskDate }}</span>
        <div class="taskToDo-name">
            <label :for="inputId" :class="{'lineThrough': taskDone}">{{ taskName }}</label>
            <input type="checkbox" class="taskInpt" :id="inputId" :checked="taskDone" @change="$emit('changeInput')">
        </div>
        <ToDoButton :deleteBtn="true" @click="$emit('deleteTask')">Удалить</ToDoButton>
        <ToDoButton :edit-btn="true" @click="$emit('toggleModal')">Изменить</ToDoButton>
    </div>
</template>
<script>
import ToDoButton from './ToDoButton.vue';

export default {
    props: ["taskName", "taskDate", "inputId", "taskDone"],
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