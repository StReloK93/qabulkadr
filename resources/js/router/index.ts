import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useUserStore } from "../stories/UserStore";

const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach(async (to, from, next) => {
   const userStore = useUserStore();

   if (!userStore.initialized) {
      try {
         await userStore.getAuthUser();
      } catch {
         // optional: handle network error
      }
   }
   const isAuthenticated = userStore.user !== null;

   if (!isAuthenticated && to.name !== "login-page" && userStore.initialized) return next({ name: "login-page" });
   else if (isAuthenticated && to.name == "login-page") return next({ name: "home-page" });
   else return next();
});

export default router;
