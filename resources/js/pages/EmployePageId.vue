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
               <PrintTibbiyYollanma :employe v-if="printPage == 1" />
               <PrintQabulVaraqa :employe v-if="printPage == 2" />
            </Teleport>
            <nav class="my-4 flex justify-between items-start">
               <div class="flex flex-col items-start"></div>
               <div>
                  <ButtonGroup>
                     <Button
                        label="Tibbiy ko'rik yo'llanmasi"
                        size="small"
                        type="button"
                        @click="openPrintPage(1)"
                     />
                     <Button
                        label="Qabul varaqasi"
                        iconPos="right"
                        size="small"
                        icon="pi pi-print"
                        @click="openPrintPage(2)"
                     />
                  </ButtonGroup>
               </div>
            </nav>
            <Panel :header="employe.full_name">
               <table class="w-full">
                  <thead>
                     <tr>
                        <td class="text-surface-500 text-sm w-1/6">Tug'ilgan yili</td>
                        <td class="text-surface-500 text-sm w-1/6">Oliy o'quv yurti</td>
                        <td class="text-surface-500 text-sm w-1/6">Ta'lim darajasi</td>
                        <td class="text-surface-500 text-sm w-1/6">Ish joyi</td>
                        <td class="text-surface-500 text-sm w-1/6">Lavozimi</td>
                        <td class="text-surface-500 text-sm w-1/6">Mehnat sharoiti</td>
                     </tr>
                     <tr>
                        <td class="w-1/6">{{ moment(employe.birth_date).format("DD-MM-YYYY") }}</td>
                        <td class="w-1/6">{{ employe.university }}</td>
                        <td class="w-1/6">{{ employe.education_level.name }}</td>
                        <td class="w-1/6">{{ employe.organization.shortname }}</td>
                        <td class="w-1/6">{{ employe.profession }}</td>
                        <td class="w-1/6">{{ employe.work_environment.name }}</td>
                     </tr>
                  </thead>
               </table>

               <div class="flex justify-end mt-10">
                  <Button :label="employe.phone || ''" variant="text" size="small" icon="pi pi-phone" />
               </div>
            </Panel>
            <aside class="flex justify-between mt-6">
               <div class="inline-flex items-center gap-3">
                  <span class="text-sm text-surface-500 inline-flex items-center gap-2">
                     <i class="pi pi-user-edit"></i> {{ employe.creater.name }}
                  </span>
                  <span class="text-sm text-surface-500 inline-flex items-center gap-2">
                     <i class="pi pi-clock text-sm!"></i> {{ moment(employe.created_at).format("DD-MM-YYYY HH:mm") }}
                  </span>
               </div>
            </aside>
         </main>
      </template>
   </Dialog>
</template>

<script setup lang="ts">
import PrintTibbiyYollanma from "@/components/PrintTibbiyYollanma.vue";
import PrintQabulVaraqa from "@/components/PrintQabulVaraqa.vue";
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
const printPage = ref<number | null>(null);

async function getEmploye() {
   employe.value = await repo.show<IEmploye>(employe_id);
}

onMounted(() => {
   isDialogVisible.value = true;
   getEmploye();
});

async function openPrintPage(number) {
   printPage.value = number;
   await nextTick();
   window.print();
}

// 5977137 GMZ PRAV SAYUZ
</script>
