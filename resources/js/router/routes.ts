import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
   {
      path: "/",
      name: "home-page",
      component: () => import("@/layouts/SiteLayout.vue"),
      redirect: { name: "employe-page" },
      children: [
         {
            path: "dashboard",
            name: "dashboard-page",
            component: () => import("@pages/DashboardPage.vue"),
         },
         {
            path: "user",
            name: "user-page",
            component: () => import("@pages/UserPage.vue"),
         },
         {
            path: "employe",
            name: "employe-page",
            component: () => import("@pages/EmployePage.vue"),
            children: [
               {
                  path: ":id",
                  props: true,
                  name: "employe-id-page",
                  component: () => import("@pages/EmployePageId.vue"),
               },
            ],
         },
         {
            path: "finished-employe",
            name: "finished-employe-page",
            component: () => import("@pages/FinishedEmployePage.vue"),
            children: [
               {
                  path: ":id",
                  props: true,
                  name: "finished-employe-id-page",
                  component: () => import("@pages/EmployePageId.vue"),
               },
            ],
         },
         {
            path: "suhbat",
            name: "suhbat-page",
            component: () => import("@pages/SuhbatPage.vue"),
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
   // 404 — Eng oxirida!
   {
      path: "/:pathMatch(.*)*", // yoki oddiy: "*"
      name: "not-found",
      component: () => import("@pages/NotFoundPage.vue"),
   },
];

export default routes;
