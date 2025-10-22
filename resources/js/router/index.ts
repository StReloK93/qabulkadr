import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useUserStore } from "../stories/UserStore";

// Simulate authentication check
const userStore = useUserStore();
const isAuthenticated = !!userStore.user;
const router =  createRouter({
   history: createWebHistory(),
   routes,
});

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router