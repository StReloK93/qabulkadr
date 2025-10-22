import { defineStore } from "pinia";
import { ref } from "vue";
import UserRepo from "../repositories/UserRepo";
import { IUser } from "../Interfaces";
export const useUserStore = defineStore("userStore", () => {
   const user = ref<null | IUser>(null);
   const initialized = ref(false);


   async function login(formData: { login: string; password: string }) {
      const result = await UserRepo.login(formData);
      localStorage.setItem("token", result.data.data.token);
      user.value = result.data.data.user;
   }



   async function getAuthUser() {
      initialized.value = true;
      const result = await UserRepo.getAuthUser();
      user.value = result.data.data;
   }

   return { user, login, getAuthUser };
});
