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
  inject: ['auth'],
  data() {
    return {
      counter: '123'
    }
  },
  methods: {
    login() {
      this.auth.login()
      if(this.$route.query.page) {
        this.$router.push(this.$route.query.page)
      }else {
        this.$router.replace('/dashboard')
      }
      
    },
    logout() {
      this.auth.logout()
      this.$router.push({
        path: '/login',
        query: {page: this.$route.path}
      });
      console.log(this.$route)
    },
    incr() {
      this.counter++;
    },
    decr() {
      this.counter--;
    }
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      counter: this.counter,
      incr: this.incr,
      decr: this.decr,
    }
  },
  created() {
    const authToken = localStorage.getItem('token');
    if(authToken) {
      this.auth.login();
    }
  }
}
</script>

<template>
  <Header/>
  <RouterView/>
</template>

<style scoped>

</style>
