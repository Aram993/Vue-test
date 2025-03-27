<template>
    <div :class="{'modal-background': true, 'show-modal': modalShow}">
        <div class="modal-active">
            <div class="modal-close">
                <img src="@/assets/images/cross.svg" @click="$emit('closeModal')"/>
            </div>
            <div class="modal-window">
                <div class="mtop">
                    <label for="mt">Введите название задачи</label>
                    <input type="text" id="mt" :value="taskName" @input="$emit('update:taskName', $event.target.value)">
                </div>
                <div class="mtop">
                    <label for="mm">Введите дату создания</label>
                    <input type="date" id="mm" :value="taskDate" @input="$emit('update:taskDate', $event.target.value)">
                </div>
                <div class="mbottom">
                    <input type="radio" id="mcontactChoice1" name="contact" value="true" :checked="taskDone" @input="$emit('update:taskDone', true)"/>
                    <label for="mcontactChoice1">Задача выполнена</label>
                
                    <input type="radio" id="mcontactChoice2" name="contact" value="false" :checked="!taskDone" @input="$emit('update:taskDone', false)"/>
                    <label for="mcontactChoice2">Задача не выполнена</label>
                </div>
                <ToDoButton type="green" class="btn-center" @click="$emit('applyChanges')">Отправить</ToDoButton>
            </div>
        </div>
    </div>
</template>
<script>
import ToDoButton from './ToDoButton.vue';

export default {
    props: ["modalShow", "taskName", "taskDone", "taskDate"],
    emits: ["closeModal", 'update:taskName', 'update:taskDate', 'update:taskDone', 'update:taskDone', "applyChanges"],

    components: {ToDoButton},
    name: "ToDoModal",
    data() {
        return {
            name: "",
            date: ""
        }
    }, methods: {
        getModalValue() {
            console.log(this.name);
            console.log(this.date);
        }
    }
}
</script>
<style  scoped>
    .modal-background {
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        width: 100%;
        height: 100%;
        /* указываем z-индекс для корректного наслаивания */
        z-index: 1;
    }

    .modal-active {
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
    .modal-close {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    /* сама картинка кнопочки закрытия */
    .modal-close img {
        margin: -10px;
        width: 50px;
        height: 50px;
    }

    .modal-window {
        position: relative;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .mtop {
        display: flex;
    }

    .mbottom {
        display: flex;
        align-items: center;
    }

    .mbottom > label {
        font-family: 'Courier New', Courier, monospace;
        display: block;
        width: 55%;
        font-size:medium;
        font-weight: bolder;
        font-style: italic;
        color: crimson;
    }

    .mbottom > input {
        width: 15%;
        height: 30px;
    }

    .modal-window > .mtop > label {
        font-family: 'Courier New', Courier, monospace;
        display: block;
        width: 45%;
        font-size:medium;
        font-weight: bolder;
        font-style: italic;
        color: crimson;
        margin-right: 20px;
    }

    .modal-window > .mtop > input {
        width: 50%;
        border: 2px solid black;
    }

    .btn-center {
        margin: 30px auto;
    }

    .show-modal {
        display: none;
    }
</style>