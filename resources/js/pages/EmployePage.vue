<template>
   <section class="relative" id="employe-page">
      <RouterView />
      <BaseCrudBlock entity="employes">
         <template #column>
            <Column>
               <template #body="{ data }">
                  <span
                     :class="[
                        { 'text-teal-700 bg-teal-100/70': data.status.id == 1 },
                        { 'text-pink-700 bg-pink-100/70': data.status.id == 2 },
                        { 'text-blue-700 bg-blue-100/70': data.status.id == 3 },
                        { 'text-zinc-700 bg-zinc-100/70': data.status.id == 4 },
                     ]"
                     class="px-3 rounded-full py-1"
                  >
                     {{ data.status.name }}
                  </span>
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
import { ref } from "vue";
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
const selectedEmploye = ref<number | null>();
</script>
