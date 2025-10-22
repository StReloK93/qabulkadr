import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
   { path: "/", name: 'home-page' ,  component: () => import("./../pages/HomePage.vue") },
   { path: "/login", name: 'login-page' ,  component: () => import("./../pages/LoginPage.vue") },
];

export default routes;
