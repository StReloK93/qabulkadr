<template>
   <section class="relative" id="employe-page">
      <RouterView />

      <BaseCrudBlock entity="employes">
         <template #column>
            <Column header="Kiritilgan vaqt">
               <template #body="{ data }">
                  {{ moment(data.created_at).format("DD-MM-YYYY HH:mm") }}
               </template>
            </Column>
            <Column>
               <template #body="{ data }">
                  <Tag :value="data.status.name" :severity="setSeverity(data.status.id)"></Tag>
               </template>
            </Column>
            <Column>
               <template #body="{ data }">
                  <Button
                     icon="pi pi-eye"
                     text
                     rounded
                     @click="$router.push({ name: 'employe-id-page', params: { id: data.id } })"
                  />
               </template>
            </Column>
         </template>

         <template #buttons>
            <Button icon="pi pi-filter" size="small" rounded variant="text" />
         </template>
      </BaseCrudBlock>
   </section>
</template>
<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
const selectedEmploye = ref<number | null>();

function setSeverity(status_id) {
   const sever = ["secondary", "success", "info", "warn", "danger", "contrast"];
   return sever[status_id];
}
</script>
