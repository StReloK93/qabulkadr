<template>
   <CrudPage>
      <template #column>
         <Column>
            <template #body="{ data }">
               <span
                  :class="[
                     {'text-teal-700 bg-teal-100/70': data.status.id == 1},
                     {'text-orange-700 bg-orange-100/70': data.status.id == 2},
                     {'text-blue-700 bg-blue-100/70': data.status.id == 3},
                     {'text-zinc-700 bg-zinc-100/70': data.status.id == 4},
                  ]"
                  class="px-3 rounded-full py-1"
               >
                  {{ data.status.name }}
               </span>
               <!-- <Button icon="pi pi-trash" text rounded severity="danger" /> -->
            </template>
         </Column>
         <Column>
            <template #body="{ data }">
               <Button icon="pi pi-eye" text rounded severity="success" />
            </template>
         </Column>
      </template>

      <template #buttons>
         <Button icon="pi pi-filter" size="small" rounded variant="text" />
      </template>
   </CrudPage>
</template>
<script setup lang="ts">
import CrudPage from "./CrudPage.vue";
</script>
