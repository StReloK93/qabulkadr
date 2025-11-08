<template>
   <Dialog
      v-model:visible="isDialogVisible"
      modal
      :style="{ width: '60rem' }"
      @after-hide="$router.push({ name: 'employe-page' })"
      :closable="false"
   >
      <template #header>
         <main class="flex justify-between items-center w-full -my-2">
            <span class="text-sm inline-flex items-center gap-3 text-surface-600">
               <i class="pi pi-users"></i>
               Xodim ma'lumotlari
            </span>
            <Button
               icon="pi pi-times"
               size="small"
               severity="secondary"
               rounded
               @click="isDialogVisible = false"
            />
         </main>
      </template>
      <template #default>
         <main v-if="employe" class="flex flex-col bg-surface-100 -mx-5 px-5 -mb-5 pb-6 rounded-b-2xl">
            <Teleport to="body">
               <PrintTibbiyYollanma v-if="printPage == 1" />
               <div v-if="printPage == 2" class="sheet p-4 invisible bg-gray-500 -z-10 absolute top-0 left-0 print:static">
                  <main class="h-full w-full border-2">Second Page</main>
               </div>
            </Teleport>
            <nav class="my-4 flex justify-between items-start">
               <div class="flex flex-col items-start">
                  <span class="text-sm text-surface-500 flex items-center gap-2">
                     <i class="pi pi-user-edit"></i> {{ employe.creater.name }}
                  </span>
                  <span class="text-sm">
                     {{ moment(employe.created_at).format("DD-MM-YYYY HH:mm") }}
                  </span>
               </div>
               <div>
                  <Button rounded size="small" @click="openPrintPage(1)" icon="pi pi-print" />
                  <Button rounded size="small" @click="openPrintPage(2)" icon="pi pi-print" />
               </div>
            </nav>
            <Panel :header="employe.full_name">
               <table>
                  <thead>
                     <tr>
                        <td class="pr-16 py-1">Tug'ilgan yili</td>
                        <td>{{ moment(employe.birth_date).format("DD-MM-YYYY") }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1">Oliy o'quv yurti</td>
                        <td>{{ employe.university }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1">Ta'lim darajasi</td>
                        <td>{{ employe.education_level.name }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1">Ish joyi (Bo'linma)</td>
                        <td>{{ employe.organization.name }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1">Lavozimi</td>
                        <td>{{ employe.profession }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1">Mehnat sharoiti</td>
                        <td>{{ employe.work_environment.name }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1">Telefon raqami</td>
                        <td>{{ employe.phone }}</td>
                     </tr>
                  </thead>
               </table>
            </Panel>
            <main class="text-right mt-6"></main>
         </main>
      </template>
   </Dialog>
</template>

<script setup lang="ts">
import PrintTibbiyYollanma from "@/components/PrintTibbiyYollanma.vue";
import moment from "moment";
import { nextTick, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CrudRepo from "@/repositories/CrudRepo";
import type { IEmploye } from "@/Interfaces";
const route = useRoute();
// Dialog holati
const isDialogVisible = ref(false);
const employe_id = route.params.id as string;
const repo = new CrudRepo("employes");
const employe = ref<IEmploye | null>(null);
const printPage = ref<number | null>(null)
async function getEmploye() {
   employe.value = await repo.show<IEmploye>(employe_id);
}

onMounted(() => {
   isDialogVisible.value = true;
   getEmploye();
});

async function openPrintPage(number) {
   printPage.value = number
   await nextTick()
   window.print();
}

// 5977137 GMZ PRAV SAYUZ
</script>
