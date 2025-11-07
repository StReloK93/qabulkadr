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
            <Button
               icon="pi pi-id-card"
               disabled
               severity="contrast"
               variant="text"
               size="small"
               rounded
            />
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
         <main class="flex flex-col gap-6">
            <Fieldset legend="Xodim ma'lumotlari">
               <table>
                  <thead>
                     <tr>
                        <td class="pr-16 py-1 text-surface-500">F.I.SH</td>
                        <td>{{ employe?.full_name }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1 text-surface-500">Tug'ilgan yili</td>
                        <td>{{ employe?.birth_date }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1 text-surface-500">Ta'lim darajasi</td>
                        <td>{{ employe?.education_level.name }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1 text-surface-500">Ish joyi (Bo'linma)</td>
                        <td>{{ employe?.organization.name }}</td>
                     </tr>
                     <tr>
                        <td class="pr-16 py-1 text-surface-500">Telefon raqami</td>
                        <td>{{ employe?.phone }}</td>
                     </tr>
                  </thead>
               </table>
            </Fieldset>
            <main class="text-right">
               <Button label="Chop etish" size="small" severity="secondary" icon="pi pi-print" />
            </main>
         </main>
      </template>
   </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CrudRepo from "@/repositories/CrudRepo";
import type { IEmploye } from "@/Interfaces";
const route = useRoute();
// Dialog holati
const isDialogVisible = ref(false);
const employe_id = route.params.id as string;
const repo = new CrudRepo("employes");
const employe = ref<IEmploye | null>(null);

async function getEmploye() {
   employe.value = await repo.show<IEmploye>(employe_id);
}

onMounted(() => {
   isDialogVisible.value = true;
   getEmploye();
});

// 5977137 GMZ PRAV SAYUZ
</script>
