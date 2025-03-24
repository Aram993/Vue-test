<template>
    <div class="container">
        <div class="info">
            <h2 class="info-header">Введите название задачи</h2>
            <ToDoInput class="info-input" :placeholder-value="placeholderValue" :my-value="taskName" @change="getInputValue"/>
            <ToDoButton :submit="true" @click="createTask">Ввести задачу</ToDoButton>
        </div>
        <div class="tasks">
            <h2 class="tasks-header">Список задач:</h2>
            <ToDoTask v-for="(item, index) in task" :key="item.name"
            :task-name="item.name" 
            :task-date="item.date" 
            :input-id="index" 
            :task-done="item.done" 
            @delete-task="delTask(index)"
            @change-input="changeTaskDone(item)"
            @toggle-modal="openModal(index)"/>
        </div>
        <ToDoModal 
        :modal-show="showModal"
        :modal-task-name="modalTaskName"
        :modal-task-date="modalTaskDate"
        :modal-done="modalTaskDone"
        :modal-not-done="modalTaskNotDone"
        @close-modal="closeModal"
        @update:model-name="newValue => modalTaskName = newValue"
        @update:model-date="newValue => modalTaskDate = newValue"
        @apply-changes="changeTaskArray(taskIndex)"/>
    </div>
</template>
<script>
import ToDoInput from './ToDoInput.vue';
import ToDoButton from './ToDoButton.vue';
import { convertDate } from '@/utils/converter';
import ToDoTask from './ToDoTask.vue';
import ToDoModal from './ToDoModal.vue';

    export default {
        components: {ToDoInput, ToDoButton, ToDoTask, ToDoModal},
        name: "Main",
        data() {
            return {
                placeholderValue: "Задача...",

                task: [
                    {
                        date: convertDate(),
                        name: "Strongest",
                        done: true
                    },
                    {
                        date: convertDate(),
                        name: "Richest",
                        done: false
                    },
                    {
                        date: convertDate(),
                        name: "Healthyest",
                        done: true
                    },
                    {
                        date: convertDate(),
                        name: "Ready",
                        done: false
                    },
                    {
                        date: convertDate(),
                        name: "Set",
                        done: true
                    },
                    {
                        date: convertDate(),
                        name: "Go",
                        done: true
                    }

                ],

                taskName: "",

                showModal: true,
                modalTaskName: "",
                modalTaskDate: "",
                modalTaskDone: false,
                modalTaskNotDone: false,
                taskIndex: null
            }

        }, methods: {
            createTask() {
                this.task.push(
                    {
                        date: convertDate(),
                        name: this.taskName,
                        done: false
                    }
                )
                this.taskName = "";
            },

            getInputValue(event) {
                this.taskName = event.target.value;
            },

            delTask(index) {
                this.task.splice(index, 1);
            },

            changeTaskDone(taskObj) {
                taskObj.done = !taskObj.done;
            },

            openModal(idx) {
                this.showModal = false;
                this.task.forEach((item, index) => {
                    if (index === idx) {
                        this.modalTaskName = item.name;
                        this.modalTaskDate = item.date;
                        this.modalTaskDone = item.done;
                        this.modalTaskNotDone = !item.done;
                    }
                })
                this.taskIndex = idx;
            },
            
            closeModal() {
                this.showModal = true;
            },

            changeTaskArray(idx) {
                this.task[idx].name = this.modalTaskName;
                this.task[idx].date = this.modalTaskDate;
                this.closeModal()
            }
        }
    }
</script>
<style scoped lang="scss">

    .container {
        display: flex;
    }

    .info {
        margin: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: max-content;
        align-items: center;

        &-header {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: xx-large;
            font-weight: bolder;
            font-style: italic;
            color: saddlebrown;
        }
    }

    .tasks {
        margin-top: 50px;
        width: 50%;
        &-header {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: xx-large;
            font-weight: bolder;
            font-style: italic;
            color: saddlebrown;
        }
    }
</style>