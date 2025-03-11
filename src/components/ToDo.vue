<template>
      <div class="container">
            <form action="">
                <label for="input">Введите название задачи</label>
                <input type="text" id="input" class="inpt" v-bind:value="userTaskName" v-on:change="onInputChange">
                <input type="submit" class="sbmt" @click.prevent="addTaskToArray">
            </form>
            <div class="block">
                <span class="list">Список задач:</span>
                <div class="tasks">
                    <div class="task" v-for="(task, idx) in taskArray">
                        <span id="date">{{task.date }}</span>
                        <label v-bind:for="idx" v-bind:class="task.done ? 'line' : ''">{{ task.name }}</label>
                        <input class="box" type="checkbox" v-bind:id="idx" v-bind:checked="task.done" v-on:change="changeTask(idx)">
                        <button class="del" v-on:click="delTask(idx)">Удалить</button>
                        <button class="edit" v-on:click="editTask(idx)">Изменить</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-bind:class="['modalBackground', 'class-2', {show: isShownModal}]">
            <div class="modalActive">
                <div class="modalClose">
                    <img v-bind:src="crossIcon" v-on:click="isShownModal = false"/>
                </div>
                <div class="modalWindow">
                    <div class="top">
                        <label for="t">Введите название задачи</label>
                        <input type="text" id="t" v-bind:value="editedTask.taskName" v-on:change="editModalName">
                    </div>
                    <div class="top">
                        <label for="m">Введите дату создания</label>
                        <input type="date" id="m" v-bind:value="editedTask.taskDate" v-on:change="editModalDate">
                    </div>
                    <div class="bottom">
                        <input type="radio" id="contactChoice1" name="contact" v-bind:value="true" v-bind:checked="editedTask.taskDone ? true : false" v-on:change="editModalDone"/>
                        <label for="contactChoice1">Задача выполнена</label>
                    
                        <input type="radio" id="contactChoice2" name="contact" v-bind:value="modalFalse"  v-bind:checked="editedTask.taskDone ? false : true" v-on:change="editModalDone"/>
                        <label for="contactChoice2">Задача не выполнена</label>
                    </div>
                    <button v-bind:style="{backgroundColor: isShownModal ? 'red' : 'white', flexDirection: 'column'}" class="modal-button" v-on:click="modalSubmit">Отправить</button>
                </div>
            </div>
        </div>
</template>


<script>
import { convertDate } from '@/utils/converter.js';
import crossIcon from '@/assets/images/cross.svg';
    export default {
        name: 'ToDo',
        data() {
            return {
                taskArray: [
                    
                ],
                userTaskName: "",
                isShownModal: false,
                crossIcon,
                editedTask: {
                    taskName: "",
                    taskDate: "",
                    taskDone: ""
                },
                taskIdx: "",
                modalFalse: ""
            }
        },
        methods: {
            onInputChange(event) {
                this.userTaskName = event.target.value;
            },
            addTaskToArray() {
                this.taskArray.push({
                        name: this.userTaskName,
                        date: convertDate(),
                        done: false
                    })
                this.userTaskName = ""
            },
            delTask(index) {
                this.taskArray.splice(index, 1);
            },
            editTask(index) {
                this.isShownModal = true;
                this.editedTask.taskName = this.taskArray[index].name;
                this.editedTask.taskDate = this.taskArray[index].date;
                this.editedTask.taskDone = this.taskArray[index].done;
                this.taskIdx = index;
            },
            convertDate,
            changeTask(index) {
                this.taskArray[index].done = !this.taskArray[index].done;
            },
            editModalName(event) {
                this.editedTask.taskName = event.target.value;
            },
            editModalDate(event) {
                this.editedTask.taskDate = event.target.value;
            },
            editModalDone(event) {
                this.editedTask.taskDone = Boolean(event.target.value);
            },
            modalSubmit() {
                this.taskArray[this.taskIdx].name = this.editedTask.taskName;
                this.taskArray[this.taskIdx].date = this.editedTask.taskDate;
                this.taskArray[this.taskIdx].done = this.editedTask.taskDone;
                this.isShownModal = false;
            }
        }
    }
</script>



<style scoped>
    * {
        box-sizing: border-box;
    }

    body {
        background-color: aquamarine;
        overflow-x: hidden;
    }

    .modalBackground {
        display: none;
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        width: 100%;
        height: 100%;
        /* указываем z-индекс для корректного наслаивания */
        z-index: 1;
    }

    .show {
        display: block;
    }

    .line {
        text-decoration: line-through;
    }

    .modalActive {
        position: absolute;
        width: 550px;
        height: 495px;
        top: calc(50% - 250px);
        left: calc(50% - 175px);
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        cursor: default;
        padding: 40px 20px;
    }

    /* кнопочка закрытия модального окна */
    .modalClose {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    /* сама картинка кнопочки закрытия */
    .modalClose img {
        margin: -10px;
        width: 50px;
        height: 50px;
    }

    .modalWindow {
        position: relative;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .modalWindow > button {
        width: 50%;
        height: 50px;
        margin: 0 auto;
        cursor: pointer;
        border-radius: 50px;
    }

    .top {
        display: flex;
    }

    .bottom {
        display: flex;
        align-items: center;
    }

    .bottom > label {
        font-family: 'Courier New', Courier, monospace;
        display: block;
        width: 55%;
        font-size:medium;
        font-weight: bolder;
        font-style: italic;
        color: crimson;
    }

    .bottom > input {
        width: 15%;
        height: 30px;
    }

    .modalWindow > .top > label {
        font-family: 'Courier New', Courier, monospace;
        display: block;
        width: 45%;
        font-size:medium;
        font-weight: bolder;
        font-style: italic;
        color: crimson;
        margin-right: 20px;
    }

    .modalWindow > .top > input {
        width: 50%;
        border: 2px solid black;
    }

    .container {
        position: absolute;
        top: 30%;
        left: 30%;
        transform: translate(-30%, -30%);
        display: flex;
        gap: 250px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items:center;
    }

    .inpt {
        border: 2px solid #eee;
        outline: none;
        height: 30px;
        width: 500px;
    }

    .sbmt {
        width: 250px;
        cursor: pointer;
    }

    form > label {
        font-family: 'Courier New', Courier, monospace;
        font-size: xx-large;
        font-weight: bolder;
        font-style: italic;
        color: crimson;
    }

    .list {
        font-family: 'Courier New', Courier, monospace;
        font-size: xx-large;
        font-weight: bolder;
        font-style: italic;
        color: crimson;
        margin: 0 15px 15px;
    }

    .tasks {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 700px;
    }

    .task {
        background-color: #fff;
        border: 2px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* gap: 15px; */
        margin: 15px;
        padding: 3px;
        width: 100%;
    }

    .task > span {
        font-family: 'Courier New', Courier, monospace;
        font-size: medium;
        font-weight: bolder;
        font-style: italic;
        color: red;
        width: 15%;
    }

    .task > label {
        font-family: 'Courier New', Courier, monospace;
        font-size: larger;
        font-weight: bolder;
        font-style: italic;
        color: darkblue;
        width: 40%;
    }

    .task >input {
        height: 25px;
        width: 25px;
    }

    .line {
        text-decoration: line-through;
    }
</style>