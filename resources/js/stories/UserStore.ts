import { defineStore } from "pinia";
import { ref, computed } from "vue";
import UserRepo from "@/repositories/UserRepo";
import type { IUser } from "@/Interfaces";
import { AxiosError } from "axios";
import router from "@/router";
export const useUserStore = defineStore("userStore", () => {
   const user = ref<null | IUser>(null);
   const initialized = ref(false);
   const logoutLoading = ref(false);
   async function login(formData: { login: string; password: string }) {
      const result = await UserRepo.login(formData);

      localStorage.setItem("token", result.data.token);
      user.value = result.data.user;
      await router.push({ name: "home-page" });
   }

   async function getAuthUser() {
      try {
         const result = await UserRepo.getAuthUser();
         user.value = result.data;
      } catch (e) {
         const error = e as AxiosError;
         if (error.response?.status === 401) user.value = null;
      } finally {
         initialized.value = true;
      }
   }

   async function logout() {
      logoutLoading.value = true;
      await UserRepo.logout();
      localStorage.removeItem("token");
      user.value = null;
      logoutLoading.value = false;
      await router.push({ name: "login-page" });
   }

   const isAdmin = computed(() => user.value?.role);

   return { user, initialized, login, getAuthUser, logout, logoutLoading, isAdmin };
});
