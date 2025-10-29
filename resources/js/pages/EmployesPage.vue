<template>
   <div>
      <nav class="text-right mb-4">
         <Drawer
            :show-close-icon="false"
            position="right"
            v-model:visible="openDrawer"
            header="Yangi xodim qo'shish"
         >
            <BaseForm
               :submit
               :setting-inputs="employeInputs"
               @close="openDrawer = false"
            />
         </Drawer>
         <Button
            icon="pi pi-plus"
            severity="secondary"
            rounded
            :loading="buttonLoading"
            @click="openDrawer = true"
         />
      </nav>
      <Card class="shadow-none! border border-surface-200 dark:border-surface-800">
         <template #header />
         <template #content>
            <DataTable
               :value="products"
               table-style="min-width: 50rem;"
               size="small"
            >
               <Column
                  field="full_name"
                  header="F.I.SH"
               />
               <Column
                  field="organization"
                  header="Bo'lim"
               />
               <Column
                  field="profession"
                  header="Lavozim"
               />
               <Column
                  field="status"
                  header="Holat"
               />

               <Column
                  header-style="width: 5rem; text-align: center"
                  body-style="text-align: center; overflow: visible"
               >
                  <template #body="{ data }">
                     <Button
                        variant="text"
                        type="button"
                        icon="pi pi-pencil"
                        rounded
                        :loading="loadingId === data.status"
                        @click="editEmploye(data)"
                     />
                  </template>
               </Column>
            </DataTable>
         </template>
      </Card>
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
import { useEmployeInputs } from "@/components/employes/EmployeInputs";
import { onMounted, ref } from "vue";
import type { IFormInputs } from "@/Interfaces";
const openDrawer = ref(false);
let employeInputs: IFormInputs[] = [];
const buttonLoading = ref(false);
function submit(values: unknown) {
   return new Promise<void>((resolve) => {
      setTimeout(() => {
         console.log("Form submitted with values:", values);
         resolve();
      }, 1000);
   });
}
const loadingId = ref<number | null>(null);
async function editEmploye(row: { status: number }) {
   loadingId.value = row.status;
   try {
      // Masalan, API dan ma'lumot olish:
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate loading
      console.log("Editing:", row);
   } finally {
      loadingId.value = null;
   }
}

onMounted(async () => {
   buttonLoading.value = true;
   try {
      employeInputs = await useEmployeInputs();
   } catch (error) {
      console.error("Error fetching employee inputs:", error);
   } finally {
      buttonLoading.value = false;
   }
});
// Fish
// tugilgan sana
// malumoti
// Oliy uquv yurti
// --
// Ishga olish asosi (sababi)
// ish joyi (bo'limi)
// sex nomi
// lavozimi
// mehnat sharoitiу
//
// telefon raqami

const products = [
   {
      full_name: "P1001",
      organization: "Product 1",
      profession: "Category A",
      status: 10,
   },
   {
      full_name: "P1002",
      organization: "Product 2",
      profession: "Category B",
      status: 20,
   },
   {
      full_name: "P1003",
      organization: "Product 3",
      profession: "Category A",
      status: 15,
   },
   { full_name: "P1004", organization: "Product 4", profession: "Category C", status: 5 },
];
</script>
