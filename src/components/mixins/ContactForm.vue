<template>
    <form>
        <h1>
            <slot></slot>
        </h1>
        <div>
            <label for="name">Введите Ваше имя:</label>
            <input type="text" id="name" v-model="formData.name">
        </div>
        <div>
            <label for="contactEmail">Введите Ваше Email:</label>
            <input type="email" id="contactEmail" v-model="formData.email">
        </div>
        <div>
            <label for="message">Введите Ваше сообщение:</label>
            <input type="text" id="message" v-model="formData.message">
        </div>
        <input type="submit" @click.prevent="onSubmit">
    </form>
    <button @click="onHey">Hey</button>
</template>
<script>
import formMixin from './formMixin';
import axios from 'axios';

export default {
    name: "ContactForm",
    mixins: [formMixin],
    data() {
        return {
            someVar: {
                a: '',
            
            }
        }
    },

    methods: {
        addDataToMixin() {
            this.formData = {
                name: "",
                email: "",
                message: ""
            }
        },

        onHey() {
            console.log(this.someVar.human?.name)
        },

        async sendForm() {
            try{
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                console.log(data);
            }catch(e) {
                console.log(e);
            }
        },

        onSubmit() {
            const isValid = this.validateForm();
            if (isValid) {
                this.submitForm();
                this.resetForm();
            } else {
                alert("Не все поля заполнены!");
            }
        }
    },

    created() {
        this.addDataToMixin();
    }
}
</script>