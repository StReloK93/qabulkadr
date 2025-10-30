import { api } from "@/helpers/useFetch";
export default class CrudRepo {
   endpoint: string;
   constructor(endpoint: string) {
      this.endpoint = endpoint;
   }

   async index<T>(): Promise<T> {
      const response = await api.get<T>(`crud/${this.endpoint}`);
      return response.data;
   }

   async show<T>(id: number): Promise<T> {
      const response = await api.get<T>(`crud/${this.endpoint}/${id}`);
      return response.data;
   }

   async store<T>(data: unknown): Promise<T> {
      const response = await api.post<T>(`crud/${this.endpoint}`, data, {
         headers: { "Content-Type": "application/json" },
      });
      return response.data;
   }

   async update<T>(id: number, data: unknown): Promise<T> {
      const response = await api.put<T>(`crud/${this.endpoint}/${id}`, data, {
         headers: { "Content-Type": "application/json" },
      });
      return response.data;
   }

   async delete<T>(id: number): Promise<T> {
      const response = await api.delete<T>(`crud/${this.endpoint}/${id}`);
      return response.data;
   }
}