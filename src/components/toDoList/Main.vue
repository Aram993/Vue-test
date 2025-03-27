<template>
    <div class="container">
        <div class="info">
            <h2 class="info-header">Введите название задачи</h2>
            <ToDoInput class="info-input" placeholder-value="Task..." v-model="taskName"/>
            <ToDoButton type="green" @on-click="createTask">Ввести задачу</ToDoButton>
        </div>
        <div class="tasks">
            <h2 class="tasks-header">Список задач:</h2>
            <ToDoTask v-for="(item, index) in task" :key="item.name"
            :task-data="item"
            :index="index"
            @delete-task="delTask"
            @change-input="changeTaskDone"
            @toggle-modal="openModal"/>
        </div>
        <ToDoModal 
        :modal-show="showModal"
        @close-modal="closeModal"
        v-model:task-name="modalTaskName"
        v-model:task-date="modalTaskDate"
        v-model:task-done="modalTaskDone"
        @apply-changes="changeTaskArray"/>
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
                task: [
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

            delTask(index) {
                this.task.splice(index, 1);
            },

            changeTaskDone(taskObj) {
                taskObj.done = !taskObj.done;
            },

            openModal(idx) {
                this.showModal = false;
                this.modalTaskName = this.task[idx].name;
                this.modalTaskDate = this.task[idx].date;
                this.modalTaskDone = this.task[idx].done;
                this.taskIndex = idx;
            },
            
            closeModal() {
                this.showModal = true;
            },

            changeTaskArray() {
                this.task[this.taskIndex].name = this.modalTaskName;
                this.task[this.taskIndex].date = this.modalTaskDate;
                this.task[this.taskIndex].done = this.modalTaskDone;
                this.closeModal()
            }
        },
        watch: {
            task: {
                handler(newValue, oldValue) {
                    console.log(newValue);
                },
                deep: true
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