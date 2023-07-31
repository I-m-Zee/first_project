import { createWebHistory, createRouter } from "vue-router";
import homeVue from "./components/routing/home.vue";
import loginVue from "./components/routing/login.vue";
import signupVue from "./components/routing/signup.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component:homeVue
    },
    {
        name: 'login',
        path: '/login/:m',
        component:loginVue
    },
    {
        name: 'signup',
        path: '/signup/:m',
        component:signupVue
    },
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router