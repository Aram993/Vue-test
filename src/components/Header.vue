<template>
    <div class="header">
        <router-link to="/dashboard">Main</router-link>
        <router-link to="/posts">Posts</router-link>
        <div @click="logout">Logout</div>
    </div>
</template>
<script>
export default {
    inject: ['logout']
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