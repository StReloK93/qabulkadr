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
            rounded
            :loading="buttonLoading"
            @click="onOpenDrawer"
         />
      </nav>
      <Card class="shadow-none! border border-surface-200 dark:border-surface-800">
         <template #header />
         <template #content>
            <DataTable
               :value="employes"
               table-style="min-width: 50rem;"
               size="small"
            >
               <Column
                  field="id"
                  header="#"
               />
               <Column
                  field="full_name"
                  header="F.I.SH"
               />
               <Column
                  field="organization.shortname"
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
import CrudRepo from "@/repositories/CrudRepo";
import BaseForm from "@/components/BaseForm.vue";
import { useEmployeInputs } from "@/configs/EmployeInputs";
import { ref, type Ref } from "vue";
import type { IFormInputs } from "@/Interfaces";
const openDrawer = ref(false);
const employes: Ref<unknown[] | null> = ref(null);
const crudRepo = new CrudRepo("employes");

async function getEmployes() {
   employes.value = await crudRepo.index();
}
getEmployes();

async function onOpenDrawer() {
   try {
      buttonLoading.value = true;
      employeInputs = await useEmployeInputs();
      openDrawer.value = true;
   } catch (error) {
      console.log(error);
   } finally {
      buttonLoading.value = false;
   }
}


let employeInputs: IFormInputs[] = [];
const buttonLoading = ref(false);
async function submit(values: unknown) {
   await crudRepo.store(values);
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
</script>
