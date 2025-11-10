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
                        <td class="w-1/6 align-top">
                           {{ moment(employe.birth_date).format("DD-MM-YYYY") }}
                        </td>
                        <td class="w-1/6 align-top">{{ employe.university }}</td>
                        <td class="w-1/6 align-top">{{ employe.education_level.name }}</td>
                        <td class="w-1/6 align-top">{{ employe.organization.shortname }}</td>
                        <td class="w-1/6 align-top">{{ employe.profession }}</td>
                        <td class="w-1/6 align-top">{{ employe.work_environment.name }}</td>
                     </tr>
                  </thead>
               </table>

               <div class="flex justify-end mt-10">
                  <Button :label="employe.phone || ''" variant="text" size="small" icon="pi pi-phone" />
               </div>
            </Panel>
            <Stepper value="1" class="my-4">
               <StepList>
                  <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="1">
                     <div class="flex flex-row flex-auto gap-4" v-bind="a11yAttrs.root">
                        <aside
                           class="text-nowrap inline-flex items-center gap-1"
                           :class="[{'text-primary font-semibold': (value as number) <= activeStep}]"
                        >
                           <i
                              :class="[(value as number) <= activeStep ? 'pi-check-circle' : 'pi-circle']"
                              class="pi"
                           />
                           Tibbiy ko'rik
                        </aside>
                        <Divider class="grow" />
                     </div>
                  </Step>
                  <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="2">
                     <div class="flex flex-row flex-auto gap-4 pl-4" v-bind="a11yAttrs.root">
                        <aside
                           class="text-nowrap inline-flex items-center gap-1"
                           :class="[{'text-primary font-semibold': (value as number) <= activeStep}]"
                        >
                           <i
                              :class="[(value as number) <= activeStep ? 'pi-check-circle' : 'pi-circle']"
                              class="pi"
                           />
                           Qabul varaqa
                        </aside>
                        <Divider />
                     </div>
                  </Step>
                  <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="3">
                     <div class="flex flex-row pl-4" v-bind="a11yAttrs.root">
                        <aside
                           class="text-nowrap inline-flex items-center gap-1"
                           :class="[{'text-primary font-semibold': (value as number) <= activeStep}]"
                        >
                           <i
                              :class="[(value as number) <= activeStep ? 'pi-check-circle' : 'pi-circle']"
                              class="pi"
                           />
                           Buyruq kutish
                        </aside>
                     </div>
                  </Step>
               </StepList>
            </Stepper>
            <aside class="flex justify-between mt-6">
               <div class="inline-flex items-center gap-3">
                  <span class="text-sm text-surface-500 inline-flex items-center gap-2">
                     <i class="pi pi-user-edit"></i> {{ employe.creater.name }}
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
            <skeleton height="191px" />
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
// Dialog holati
const isDialogVisible = ref(false);
const employe_id = route.params.id as string;
const repo = new CrudRepo("employes");
const employe = ref<IEmploye | null>(null);
const printPage = ref<number | null>(null);

const activeStep = ref(1);
async function getEmploye() {
   const as = await repo.show<IEmploye>(employe_id);
   setTimeout(() => {
      employe.value = as;
   }, 300);
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
