import { ref } from "vue";
import type { AxiosResponse } from "axios";
import axios from "axios";
type HttpMethod = "get" | "post" | "put" | "delete"; // Define allowed HTTP methods

const wialonHttp = axios.create({
   baseURL: "/api",
   headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` },
   withCredentials: false,
});
type FetchOptions<T = unknown> = {
   url: string;
   formData?: object;
   method?: HttpMethod;
   onLoad?: (result: { data: T; error: object | null }) => void;
};

function useFetch<T>({ url, formData = {}, method = "get", onLoad }: FetchOptions<T>) {
   const data = ref<T | null>(null);
   const error = ref<object | null>(null);
   const isLoading = ref(true);
   const isFirstLoading = ref(true);

   const fetchData = async (options?: object) => {
      isLoading.value = true;
      error.value = null;

      try {
         const response: AxiosResponse<T> = await wialonHttp[method](url, options); // No need to lowercase, method is already typed
         data.value = response.data;
      } catch (err) {
         error.value = err as object | null;
      } finally {
         isLoading.value = false;
         isFirstLoading.value = false;
         if (onLoad) onLoad({ data: data.value as T, error: error.value });
      }
   };

   fetchData(formData);
   return { data, error, isLoading, fetchData, isFirstLoading };
}

export { useFetch, wialonHttp };
