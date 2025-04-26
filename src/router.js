import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Forget from "./pages/Forget.vue";
import Posts from "./pages/Posts.vue";
import Dashboard from "./pages/Dashboard.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: Login, alias: '/'},
        {path: '/forget', component: Forget},
        {path: '/posts', component: Posts},
        {path: '/dashboard', component: Dashboard},
    ],
    linkActiveClass: 'active'
})