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
         <main
            v-if="employe"
            class="flex flex-col bg-surface-50 dark:bg-surface-800 -mx-5 px-5 -mb-5 pb-6 rounded-b-2xl"
         >
            <Teleport to="body">
               <PrintTibbiyYollanma :employe v-if="printPage == 1" />
               <PrintQabulVaraqa :employe v-if="printPage == 2" />
            </Teleport>
            <nav class="my-4 flex justify-between items-start">
               <div class="flex flex-col items-start"></div>
               <div>
                  <SpeedDial :model="items" direction="left" :transitionDelay="40" pt:menuitem="m-2">
                     <template #button="{ toggleCallback }">
                        <Button @click="toggleCallback" size="small" icon="pi pi-print" raised rounded />
                     </template>
                     <template #item="{ item, toggleCallback }">
                        <Button @click="toggleCallback" outlined size="small">
                           {{ item.label }}
                        </Button>
                     </template>
                  </SpeedDial>
               </div>
            </nav>
            <Panel :header="employe.full_name">
               <table class="w-full">
                  <thead>
                     <tr>
                        <td class="text-surface-500 text-sm w-1/7">Tug'ilgan yili</td>
                        <td class="text-surface-500 text-sm w-1/7">Oliy o'quv yurti</td>
                        <td class="text-surface-500 text-sm w-1/7">Ta'lim darajasi</td>
                        <td class="text-surface-500 text-sm w-1/7">Ish joyi</td>
                        <td class="text-surface-500 text-sm w-1/7">Uchastka nomi</td>
                        <td class="text-surface-500 text-sm w-1/7">Lavozimi</td>
                        <td class="text-surface-500 text-sm w-1/7">Mehnat sharoiti</td>
                     </tr>
                     <tr>
                        <td class="w-1/7 align-top">
                           {{ moment(employe.birth_date).format("DD-MM-YYYY") }}
                        </td>
                        <td class="w-1/7 align-top">{{ employe.university }}</td>
                        <td class="w-1/7 align-top">{{ employe.education_level.name }}</td>
                        <td class="w-1/7 align-top">{{ employe.organization.shortname }}</td>
                        <td class="w-1/7 align-top">
                           {{ employe.division ? employe.division : "---" }}
                        </td>
                        <td class="w-1/7 align-top">{{ employe.profession }}</td>
                        <td class="w-1/7 align-top">{{ employe.work_environment.name }}</td>
                     </tr>
                  </thead>
               </table>

               <main class="flex gap-4 mt-20">
                  <div class="inline-flex flex-1 flex-col">
                     <p class="text-surface-500 text-sm">Korxona hisobidan</p>
                     <i v-if="employe.company" class="pi pi-check text-sm! text-primary"></i>
                     <i v-else class="pi pi-times text-sm!" style="color: red"></i>
                  </div>
                  <div class="inline-flex flex-1 flex-col">
                     <p class="text-surface-500 text-sm">Nogironligi</p>
                     <span class="text-sm!" v-if="employe.disability_type">
                        {{ employe.disability_type.name }}
                     </span>
                     <i v-else class="pi pi-times text-sm!" style="color: red"></i>
                  </div>
                  <div class="inline-flex flex-1 flex-col">
                     <p class="text-surface-500 text-sm">Kvotasi</p>
                     <span class="text-sm!" v-if="employe.quot_type">{{ employe.quot_type.name }}</span>
                     <i v-else class="pi pi-times text-sm!" style="color: red"></i>
                  </div>
                  <div class="inline-flex flex-1 flex-col">
                     <p class="text-surface-500 text-sm">Qabul shakli</p>
                     <span class="text-sm!" v-if="employe.cause">{{ employe.cause.name }}</span>
                     <i v-else class="pi pi-times text-sm!" style="color: red"></i>
                  </div>
                  <div class="inline-flex flex-1 flex-col">
                     <p class="text-surface-500 text-sm">Asos</p>
                     <span class="text-sm!" v-if="employe.cause_text">{{ employe.cause_text }}</span>
                     <i v-else class="pi pi-times text-sm!" style="color: red"></i>
                  </div>
               </main>
               <div class="flex justify-end mt-10">
                  <Button
                     v-if="employe.phone"
                     :label="employe.phone || ''"
                     variant="text"
                     size="small"
                     icon="pi pi-phone"
                  />
                  <span v-else class="h-9"></span>
               </div>
            </Panel>
            <Stepper value="1" class="my-4">
               <StepList>
                  <Step v-for="(stat, index) in statuses" asChild :value="stat.id">
                     <div
                        class="flex flex-row"
                        :class="[
                           { 'flex-auto gap-4': index < statuses.length - 1 },
                           { 'pl-4': index != 0 },
                        ]"
                     >
                        <aside
                           class="text-nowrap inline-flex items-center gap-1"
                           :class="[{ 'text-primary font-semibold': stat.id <= employe.status_id }]"
                        >
                           <i
                              :class="[stat.id <= employe.status_id ? 'pi-check-circle' : 'pi-circle']"
                              class="pi"
                           />
                           {{ stat.name }}
                        </aside>
                        <Divider v-if="index != statuses.length - 1" class="grow" />
                     </div>
                  </Step>
               </StepList>
            </Stepper>

            <aside class="flex justify-between mt-6">
               <div class="inline-flex items-center gap-3">
                  <span class="text-sm text-surface-500 inline-flex items-center">
                     # {{ employe.id }}
                  </span>
                  <span class="text-sm text-surface-500 inline-flex items-center gap-2">
                     <i class="pi pi-user-edit text-sm!"></i> {{ employe.creater.name }}
                  </span>
                  <span class="text-sm text-surface-500 inline-flex items-center gap-2">
                     <i class="pi pi-clock text-sm!"></i>
                     {{ moment(employe.created_at).format("DD-MM-YYYY HH:mm") }}
                  </span>
               </div>
            </aside>
         </main>
         <main v-else>
            <nav class="my-4 flex justify-between items-start">
               <div class="flex flex-col items-start"></div>
               <div>
                  <skeleton height="35px" width="309px" />
               </div>
            </nav>
            <skeleton height="202px" />
            <nav class="flex justify-between my-4">
               <skeleton height="32px" width="108px" />
               <skeleton height="32px" width="108px" />
               <skeleton height="32px" width="108px" />
            </nav>
            <aside class="flex justify-between mt-10">
               <skeleton height="20px" width="250px" />
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
const isDialogVisible = ref(false);
const employe_id = route.params.id as string;
const statuses = ref();
const repo = new CrudRepo("employes");
const repoStatus = new CrudRepo("status");
const employe = ref<IEmploye | null>(null);
const printPage = ref<number | null>(null);

function getEmploye() {
   setTimeout(async () => {
      employe.value = await repo.show<IEmploye>(employe_id);
   }, 200);
}

onMounted(async () => {
   isDialogVisible.value = true;
   getEmploye();

   statuses.value = await repoStatus.index();
});

async function openPrintPage(number) {
   printPage.value = number;
   await nextTick();
   window.print();
}

const items = ref([
   {
      label: "Tibbiy ko'rik yo'llanmasi",
      command: () => openPrintPage(1),
   },
   {
      label: "Qabul varaqasi",
      command: () => openPrintPage(2),
   },
]);
</script>
