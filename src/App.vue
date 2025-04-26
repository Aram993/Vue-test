<script>
import Header from './components/Header.vue';
import Dashboard from './pages/Dashboard.vue';
import Forget from './pages/Forget.vue';
import Login from './pages/Login.vue';
import Posts from './pages/Posts.vue';
import { RouterView } from 'vue-router';


export default {
  name: 'App',
  components: {Login, Dashboard, Posts, Forget, Header},
  data() {
    return {
      isAuth: false
    }
  },
  methods: {
    login() {
      this.isAuth = true;
      this.$router.replace('/dashboard')
    },
    logout() {
      this.isAuth = false;
      this.$router.push('/login');
    }
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      isAuth: this.isAuth
    }
  }
}
</script>

<template>
  <Header v-if="isAuth"/>
  <RouterView/>
</template>

<style scoped>

</style>
