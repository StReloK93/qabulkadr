<!-- @pages/NotFoundPage.vue -->
<template>
   <div class="flex items-center justify-center min-h-screen bg-surface-50 dark:bg-surface-900">
      <Card class="w-full max-w-sm shadow-2xl border-0">
         <template #header>
            <div class="flex justify-center -mt-16">
               <div
                  class="flex items-center justify-center w-32 h-32 rounded-full bg-primary-100 dark:bg-primary-900/30 border-8 border-white dark:border-surface-900 shadow-lg"
               >
                  <i class="pi pi-exclamation-triangle text-6xl text-primary"></i>
               </div>
            </div>
         </template>

         <template #title>
            <h1 class="text-6xl font-bold text-center text-surface-900 dark:text-surface-0 mt-4">404</h1>
         </template>

         <template #subtitle>
            <p class="text-center text-lg text-surface-600 dark:text-surface-300 mt-2">
               Kechirasiz, siz izlagan sahifa topilmadi.
            </p>
            <p class="text-center text-sm text-surface-500 dark:text-surface-400 mt-1">
               URL manzilni tekshiring yoki bosh sahifaga qayting.
            </p>
         </template>

         <template #content>
            <div class="flex flex-col items-center gap-4 mt-6">
               <Button
                  label="Bosh sahifaga qaytish"
                  icon="pi pi-home"
                  size="small"
                  class="w-full max-w-xs"
                  @click="goHome"
               />

               <Button
                  label="Oldingi sahifa"
                  icon="pi pi-arrow-left"
                  severity="secondary"
                  outlined
                  size="small"
                  class="w-full max-w-xs"
                  @click="goBack"
               />
            </div>
         </template>
      </Card>
   </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Card from "primevue/card";
import Button from "primevue/button";

const router = useRouter();

const goHome = () => {
   router.push({ name: "home-page" });
};

const goBack = () => {
   router.back();
};
</script>

<style scoped>
:deep(.p-card) {
   border-radius: 1.5rem;
}
:deep(.p-card .p-card-title) {
   margin-top: 0.5rem;
}
</style>
