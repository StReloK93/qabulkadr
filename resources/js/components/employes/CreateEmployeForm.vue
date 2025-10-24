<template>
   <nav class="text-right mb-4">
      <Drawer
         :show-close-icon="false"
         position="right"
         v-model:visible="visible"
         header="Yangi xodim qo'shish"
      >
         <BaseForm
            v-slot="slotProps"
            :submit
            :resolver
            :initial-values
            @vue:mounted="() => {console.log('setup mounted')}"
         >
            <div class="mb-4">
               <InputText
                  name="full_name"
                  type="text"
                  placeholder="F.I.SH"
                  size="small"
                  fluid
               />
               <Message
                  v-if="slotProps.form.name?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
               >
                  {{ slotProps.form.name.error.message }}
               </Message>
            </div>
            <div>
               <InputText
                  name="birth_date"
                  type="text"
                  placeholder="Tug'ilgan sana"
                  size="small"
                  fluid
               />
               <Message
                  v-if="slotProps.form.name_ru?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
               >
                  {{ slotProps.form.name_ru.error.message }}
               </Message>
            </div>
         </BaseForm>
      </Drawer>
      <Button
         icon="pi pi-plus"
         severity="secondary"
         rounded
         @click="visible = true"
      />
   </nav>
</template>

<script setup lang="ts">
import * as yup from "yup";
import BaseForm from "@/components/BaseForm.vue";
import { yupResolver } from "@primevue/forms/resolvers/yup";
import { reactive, ref } from "vue";
const visible = ref(false);



function submit(values: unknown) {
   return new Promise<void>((resolve) => {
      setTimeout(() => {
         console.log("Form submitted with values:", values);
         resolve();
      }, 1000);
   });
}

const initialValues = reactive({
   full_name: "",
   birth_date: "",
   // education: "",
   // university: "",
   // cause_id: "",
   // organization_id: "",
   // profession: "",
   // status: "",
});
const resolver = yupResolver(
   yup.object({
      full_name: yup.string().default('Aziz').required("To'ldiring"),
      birth_date: yup.string().required("To'ldiring"),
      // education: yup.string().required("To'ldiring"),
      // university: yup.string().required("To'ldiring"),
      // cause_id: yup.string().required("To'ldiring"),
      // organization_id: yup.string().required("To'ldiring"),
      // profession: yup.string().required("To'ldiring"),
      // status: yup.string().required("To'ldiring"),
   })
);

setTimeout(() => {
   initialValues.full_name = "Aziz";

}, 2000);
</script>
