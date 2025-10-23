import axios from "axios";
import type { IUser } from "@/Interfaces";
async function login(formData: { login: string; password: string }) {
   return await axios.post<{ user: IUser; type: "Bearer"; token: string }>(
      "api/login",
      formData
   );
}

async function getAuthUser() {
   return await axios.get<IUser>("api/user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
   });
}

async function logout() {
   return await axios.post(
      "api/logout",
      {},
      {
         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
   );
}
export default { login, getAuthUser, logout };
