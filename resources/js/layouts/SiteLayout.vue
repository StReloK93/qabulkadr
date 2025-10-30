<template>
   <section class="flex w-full">
      <BaseNavigation />
      <main class="flex-1 flex flex-col">
         <BaseNavbar />
         <div class="bg-surface-50 dark:bg-surface-900 grow relative">
            <section class="absolute inset-0 overflow-y-scroll px-16 py-10">
               <RouterView />
            </section>
         </div>
      </main>
   </section>
</template>

<script setup lang="ts">
import BaseNavigation from "@/components/BaseNavigation.vue";
import BaseNavbar from "@/components/BaseNavbar.vue";
</script>
