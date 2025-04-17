<template>
    <form>
        <h1>
            <slot></slot>
        </h1>
        <div>
            <label for="email">Введите Ваш Email:</label>
            <input type="email" id="email" v-model="formData.email">
        </div>
        <div>
            <label for="pass">Введите Ваш пароль:</label>
            <input type="password" id="pass" v-model="formData.password">
        </div>
        <input type="submit" @click.prevent="onSubmit">
    </form>
</template>
<script>
import formMixin from './formMixin';
import axios from 'axios';

export default {
    name: "LoginForm",
    mixins: [formMixin],
    
    methods: {
        addDataToMixin() {
            this.formData = {
                email: "",
                password: ""
            }
        },


        onSubmit() {
            this.submitForm();
            this.resetForm();
        }
    },

    created() {
        this.addDataToMixin();
    }
}
</script>