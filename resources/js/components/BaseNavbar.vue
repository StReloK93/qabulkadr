<template>
   <nav
      class="h-14 flex justify-between items-center bg-white dark:bg-surface-950 border-b border-surface-200 dark:border-surface-800 px-4"
   >
      <span class="text-surface-900 flex items-center dark:text-white uppercase gap-4">
         <i class="pi pi-user" />
         {{ UserStore.user?.login }}
      </span>
      <aside class="flex items-center gap-4">
         <Button
            variant="text"
            rounded
            :icon="themeMoon ? 'pi pi-sun' : 'pi pi-moon'"
            severity="contrast"
            @click="toggleDarkMode()"
         />
         <Button
            icon="pi pi-sign-out"
            severity="contrast"
            variant="text"
            :loading="UserStore.logoutLoading"
            rounded
            aria-label="Star"
            @click="UserStore.logout()"
         />
      </aside>
   </nav>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stories/UserStore";
import { ref } from "vue";
const UserStore = useUserStore();

const themeMoon = ref(false);
function toggleDarkMode() {
   document.documentElement.classList.toggle("dark");
   themeMoon.value = document.documentElement.classList.contains("dark");
}
</script>
