<template>
   <section class="relative" id="employe-page">
      <BaseCrudBlock entity="users" :withSearch="false" :withFilter="false">
         <template #column>
            <Column header="Admin">
               <template #body="{ data }">
                  <i v-if="data.role" class="pi pi-check text-teal-500"></i>
                  <i v-else class="pi pi-times text-red-500"></i>
               </template>
            </Column>
         </template>
      </BaseCrudBlock>
   </section>
</template>
<script setup lang="ts">
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
</script>
