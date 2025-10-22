import { defineStore } from "pinia";
import { ref } from "vue";
import UserRepo from "../repositories/UserRepo";
import { IUser } from "../Interfaces";
import { AxiosError } from "axios";
import router from "../router";
export const useUserStore = defineStore("userStore", () => {
   const user = ref<null | IUser>(null);
   const initialized = ref(false);

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
      }
      finally {
         initialized.value = true;
      }
   }

   async function logout() {
      await UserRepo.logout();
      localStorage.removeItem("token");
      user.value = null;
      await router.push({ name: "login-page" });
   }

   return { user, initialized, login, getAuthUser, logout };
});
