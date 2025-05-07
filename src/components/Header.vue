<template>
    <div class="header">
        <router-link to="/dashboard">Main</router-link>
        <router-link to="/posts">Posts</router-link>
        <router-link to="/emails">Emails</router-link>
        <div @click="logout">Logout</div>
        <div>{{ count }}</div>
        <div>{{ user?.email }}</div>
    </div>
</template>
<script>
import { useCounterStore } from '@/stores/counterStore';
import { useUserStore } from '@/stores/userStore';
import { mapState } from 'pinia';
export default {
    inject: ['logout'],
    computed: {
        ...mapState(useCounterStore, ['count']),
        ...mapState(useUserStore, ['user']),
    }
}
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        gap: 20px;
        background: black;
        color: wheat;
        height: 50px;
        padding: 10px 0;

        & > a {
            color: white;
            text-decoration: none;

            &.active {
                text-decoration: underline;
            }
        }
    }
</style>