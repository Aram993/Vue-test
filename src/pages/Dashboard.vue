<template>
    <h1>
        {{count}}
    </h1>
    <h1>
        {{doubleCount}}
    </h1>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click='login'>Get token</button>
        <button @click='getProfile'>Get profile</button>
        <button @click='logout'>Logout</button>
    </div>
</template>
<script>
import { $axios } from '@/http';
import { useCounterStore } from '@/stores/counterStore';
import { useUserStore } from '@/stores/userStore';
import { mapState, mapActions } from 'pinia';

export default {
    computed: {
        ...mapState(useCounterStore, ['count', 'name', 'doubleCount']),
    },
    methods: {
        ...mapActions(useCounterStore, ['increment', 'decrement']),
        ...mapActions(useUserStore, ['setUser']),
    
        async login() {
            try{
                const {data} = await $axios.post('/auth/login', {
                    username: 'emilys', password: 'emilyspass'
                })

                localStorage.setItem('authToken', data.accessToken)
            }catch(e) {
                console.log(e)
            }
        },
        async getProfile() {
            try{
                const {data} = await $axios.get('/auth/me')

                this.setUser(data);
            }catch(e) {
                console.log(e)
            }
        },
        async logout() {
            localStorage.removeItem('authToken');
            this.setUser(null);
        }
    }

}
</script>
<style>
    
</style>