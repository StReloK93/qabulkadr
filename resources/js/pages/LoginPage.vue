<template>
   <div class="flex justify-center items-center bg-blue-500">
      <Form
         v-slot="$form"
         :initial-values="initialValues"
         :resolver
         @submit="onFormSubmit"
         autocomplete="off"
      >
         <Card style="width: 25rem; overflow: hidden">
            <template #title>
               Kirish
            </template>
            <template #content>
               <div class="flex flex-col gap-2">
                  <InputText
                     @keydown="clearError"
                     name="login"
                     type="text"
                     placeholder="Login"
                     fluid
                     autocomplete="new-login"
                  />
                  <Message
                     v-if="$form.login?.invalid"
                     severity="error"
                     size="small"
                     variant="simple"
                  >
                     {{ $form.login.error?.message }}
                  </Message>

                  <InputText
                     @keydown="clearError"
                     name="password"
                     type="password"
                     placeholder="Parol"
                     autocomplete="new-password"
                     fluid
                  />
                  <Message
                     v-if="$form.password?.invalid"
                     severity="error"
                     size="small"
                     variant="simple"
                  >
                     {{ $form.password.error?.message }}
                  </Message>
               </div>
               <Message
                  v-if="error.length"
                  severity="error"
                  size="small"
                  variant="simple"
                  class="mt-1"
               >
                  {{ error }}
               </Message>
            </template>
            <template #footer>
               <div class="flex gap-4">
                  <Button
                     :loading="loading"
                     severity="secondary"
                     type="submit"
                     label="Kirish"
                     class="w-full"
                  />
               </div>
            </template>
         </Card>
      </Form>
   </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms";
import { reactive, ref } from "vue";
import { useUserStore } from "../stories/UserStore";
import { AxiosError } from "axios";
import { yupResolver } from "@primevue/forms/resolvers/yup";
import * as yup from "yup";

const error = ref<string>("");
const loading = ref(false)
const UserStore = useUserStore();
const initialValues = reactive({
   login: "",
   password: "",
});

const resolver = yupResolver(
   yup.object().shape({
      login: yup.string().required("Login bo'sh bo'lmasligi kerak."),
      password: yup.string().required("Parol bo'sh bo'lmasligi kerak."),
   })
);


function clearError() {
   error.value = "";
}


async function onFormSubmit(params: FormSubmitEvent) {
   if (params.valid) {
      const values = params.values as { login: string; password: string };
      loading.value = true
      try {
         await UserStore.login(values);
      } catch (axiosError) {
         const err = axiosError as AxiosError<{ message: string }>;
         error.value = err.response?.data?.message ?? err.message ?? "Noma'lum xatolik yuz berdi";
      }
      finally{
         loading.value = false
      }
   }
}
</script>
