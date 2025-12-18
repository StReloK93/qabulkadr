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
            @click="confirmDelete"
         />
      </aside>
   </nav>
</template>

<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { useUserStore } from "@/stories/UserStore";
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();
const UserStore = useUserStore();

const confirmDelete = (event) => {
   confirm.require({
      target: event.currentTarget,
      message: "Dasturdan chiqmoqchimisiz?",
      rejectProps: {
         label: "Bekor qilish",
         severity: "secondary",
         outlined: true,
      },
      acceptProps: {
         label: "Chiqish",
         severity: "danger",
      },
      accept: () => {
         UserStore.logout();
      },
   });
};

const themeMoon = useStorage("theme", false);

if (themeMoon.value && document.documentElement.classList.contains("dark") == false) {
   document.documentElement.classList.add("dark");
}

function toggleDarkMode() {
   document.documentElement.classList.toggle("dark");
   themeMoon.value = document.documentElement.classList.contains("dark");
}
</script>
