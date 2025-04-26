<template>
    <h1>
        Login
    </h1>

    <div>
        <input v-model="email" type="text" placeholder="email">
        <input v-model="password" type="text" placeholder="password">
        <button @click="onSubmit">Submit</button>
        <router-link to="/forget">
            <button>Forget Password</button>
        </router-link>
        <!-- <button @click="this.$router.push('/forget')">Forget Password</button> -->
    
    </div>
</template>
<script>
export default {
    inject: ['login'],
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.email.length && this.password.length) {
                this.login();
            }
        }
    }
}
</script>
<style lang="">
    
</style>