import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
   {
      path: "/",
      name: "home-page",
      component: () => import("@/layouts/SiteLayout.vue"),
      redirect: { name: "dashboard-page" },
      children: [
         {
            path: "",
            name: "dashboard-page",
            component: () => import("@pages/DashboardPage.vue"),
         },
         {
            path: "employes",
            name: "employes-page",
            component: () => import("@pages/EmployesPage.vue"),
         },
         {
            path: "crud/:entity",
            props: true,
            name: "crud-page",
            component: () => import("@pages/CrudPage.vue"),
         },
      ],
   },
   {
      path: "/login",
      name: "login-page",
      component: () => import("@pages/LoginPage.vue"),
   },
];

export default routes;
