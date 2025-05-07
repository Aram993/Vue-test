import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Forget from "./pages/Forget.vue";
import Posts from "./pages/Posts.vue";
import Dashboard from "./pages/Dashboard.vue";
import Emails from "./pages/Emails.vue";
import News from "./components/News.vue";
import People from "./components/People.vue";
import PageNotFound from "./components/PageNotFound.vue";
import auth from "./auth";
import { useUserStore } from "./stores/userStore";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: Login, alias: '/', name: 'login'},
        {path: '/forget', component: Forget},
        {path: '/posts', component: Posts,  meta: {requiresAuth: true}},
        {path: '/posts/:postId', component: News, meta: {requiresAuth: true}},
        {path: '/posts/:postId/success', component: People},
        {path: '/dashboard', component: Dashboard},
        {path: '/emails/:mailId?', component: Emails, meta: {requiresAuth: true}},
        {path: '/:notFound(.*)', component: PageNotFound}

    ],
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if(to.meta.requiresAuth && !userStore.isAuthenticated) {
        alert('Private route');
        next('/login');
    }else {
        next();
    }
})

export default router;