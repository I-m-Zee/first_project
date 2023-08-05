import { createWebHistory, createRouter } from "vue-router";
import homeVue from "./components/routing/home.vue";
import loginVue from "./components/routing/login.vue";
import signupVue from "./components/routing/signup.vue";
import PNF from "./components/routing/PNF.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: homeVue,
  },
  {
    name: "login",
    path: "/login/:m",
    component: loginVue,
  },
  {
    name: "signup",
    path: "/signup/:m",
    component: signupVue,
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: PNF,
  },
];

const router = createfRouter({
  history: createWebHistory(),
  routes,
});

export default router;
