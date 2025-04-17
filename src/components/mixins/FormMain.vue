<template>
    <LoginForm 
        v-model:user-email="userEmail"
        v-model:user-password="userPassword"
        @get-user-data="addUserData">
        Login Form
    </LoginForm>
    <ContactForm>
        Contact Form
    </ContactForm>
</template>
<script>
import ContactForm from './ContactForm.vue';
import formMixin from './formMixin';
import LoginForm from './LoginForm.vue';

export default {
    name: "FormMain",
    components: {LoginForm, ContactForm},
    mixins: [formMixin],
    data() {
        return {
            userEmail: "",
            userPassword: "",
            userName: "",
            contactEmail: "",
            userMessage: "",
            isValidate: false,
            arr: []
        }
    },

    methods: {
        addUserData() {
            this.formData.email = this.userEmail;
            this.formData.password = this.userPassword;
            this.sendData();
        },

        addContactData() {
            this.formData.name = this.userName;
            this.formData.email = this.contactEmail;
            this.formData.message = this.userMessage;
            this.sendData();
        },

        sendData() {
            this.isValidate = this.validateForm();
            if (this.isValidate) {
                this.submitForm();
                this.resetForm();
            } else {
                alert("Заполните форму полностью");
            }
            
            if (Object.keys(this.formData).length === 0) {
                this.userEmail = "";
                this.userPassword = "";
                this.userName = "";
                this.contactEmail = "";
                this.userMessage = "";
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>