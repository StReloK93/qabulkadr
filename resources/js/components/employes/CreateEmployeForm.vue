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
         >
            <template v-if="slotProps.form">
               <BaseFormField
                  v-for="settingInput in settingInputs"
                  :field="settingInput"
                  :input-field="slotProps.form[settingInput.name]!"
                  :key="settingInput.name"
               />
            </template>
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
import BaseFormField from "../BaseFormField.vue";
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

const settingInputs = [
   { name: "full_name", placeholder: "F.I.SH", type: "text", schema: yup.string().required("To'ldiring") },
   { name: "birth_date", placeholder: "Tug'ilgan sana", type: "text", schema: yup.string().required("To'ldiring") },
   { name: "education", placeholder: "Ma'lumot", type: "text", schema: yup.string().required("To'ldiring") },
   { name: "university", placeholder: "Oliy o'quv yurti", type: "text", schema: yup.string().required("To'ldiring") },
   {
      name: "cause_id",
      placeholder: "Ishga qabul qilish sababi",
      type: "text",
      schema: yup.string().required("To'ldiring"),
   },
   { name: "organization_id", placeholder: "Bo'lim", type: "text", schema: yup.string().required("To'ldiring") },
   { name: "profession", placeholder: "Lavozim", type: "text   ", schema: yup.string().required("To'ldiring") },
   { name: "status", placeholder: "Holat", type: "text", schema: yup.string().required("To'ldiring") },
];

const initialValues = reactive(
   settingInputs.reduce((acc, curr) => {
      acc[curr.name] = "";
      return acc;
   }, {} as Record<string, unknown>)
);

const resolver = yupResolver(
   yup.object(
      settingInputs.reduce((acc, curr) => {
         acc[curr.name] = curr.schema;
         return acc;
      }, {} as Record<string, yup.AnySchema>)
   )
);
</script>
