<template>
   <section class="flex w-full">
      <BaseNavigation />
      <main class="flex-1 bg-surface-50">
         <nav class="h-14 flex justify-between items-center bg-white border-b border-b-surface-200 px-4">
            <span class="text-surface-900 flex items-center uppercase gap-4">
               <i class="pi pi-user" />
               {{ UserStore.user?.login }}
            </span>

            <Button
               icon="pi pi-sign-out"
               severity="contrast"
               variant="text"
               :loading="UserStore.logoutLoading"
               rounded
               aria-label="Star"
               @click="UserStore.logout()"
            />
         </nav>
         <main class="p-8">
            <RouterView />
         </main>
      </main>
   </section>
</template>

<script setup lang="ts">
import BaseNavigation from "@/components/BaseNavigation.vue";
import { useUserStore } from "@/stories/UserStore";
const UserStore = useUserStore();
</script>
