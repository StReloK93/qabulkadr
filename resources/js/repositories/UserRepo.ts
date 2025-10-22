import axios from "axios";
import { IUser } from "../Interfaces";
async function login(formData: { login: string; password: string }) {
   return await axios.post<{ data: { user: IUser; type: "Bearer"; token: string }; error: object }>(
      "api/login",
      formData
   );
}

async function getAuthUser() {
   return await axios.get("api/user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
   });
}

export default { login, getAuthUser };
