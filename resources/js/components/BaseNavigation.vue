<template>
   <nav
      class="p-3 border-r border-r-surface-200 dark:border-r-surface-800 w-72 bg-white dark:bg-surface-950"
   >
      <div class="flex items-center gap-3 mb-8 px-2">
         <img :src="`/logo.svg`" class="w-12 dark:invert" />
         <span
            class="text-lg font-semibold text-surface-700 dark:text-surface-300 leading-3 font-[Trickster]"
         >
            QabulHR
         </span>
      </div>
      <div class="flex justify-center flex-col gap-1.5">
         <p class="text-xs text-surface-600 dark:text-surface-400 px-3">Asosiy bo'lim</p>
         <RouterLink class="w-full" :to="{ name: 'dashboard-page' }">
            <Button
               :severity="route.name == 'dashboard-page' ? 'primary' : 'contrast'"
               class="w-full justify-start! border border-surface-300"
               variant="text"
               label="Dashboard"
               icon="pi pi-home"
               size="small"
            />
         </RouterLink>
         <p class="text-xs text-surface-600 dark:text-surface-400 px-3">Xodimlar</p>
         <RouterLink class="w-full" :to="{ name: 'employe-page' }">
            <Button
               :severity="route.name == 'employe-page' ? 'primary' : 'contrast'"
               class="w-full justify-start! border border-surface-300"
               variant="text"
               label="Jarayondagilar"
               icon="pi pi-user-plus"
               size="small"
            />
         </RouterLink>
         <RouterLink class="w-full" :to="{ name: 'finished-employe-page' }">
            <Button
               :severity="route.name == 'finished-employe-page' ? 'primary' : 'contrast'"
               class="w-full justify-start! border border-surface-300"
               variant="text"
               label="Ishga qabul qilinganlar"
               icon="pi pi-users"
               size="small"
            />
         </RouterLink>
         <RouterLink class="w-full" :to="{ name: 'suhbat-page' }">
            <Button
               :severity="route.name == 'suhbat-page' ? 'primary' : 'contrast'"
               class="w-full justify-start! border border-surface-300"
               variant="text"
               label="Suhbatdan o'tish"
               icon="pi pi-hammer"
               size="small"
            />
         </RouterLink>
         <Divider />
         <p class="text-xs text-surface-600 dark:text-surface-400 px-3">Qo'llanmalar</p>
         <RouterLink
            v-for="page in crudPages"
            class="w-full"
            :to="{ name: 'crud-page', params: { entity: page.name } }"
            :key="page.name"
         >
            <Button
               class="w-full justify-start! border border-surface-300"
               variant="text"
               :severity="route.params.entity == page.name ? 'primary' : 'contrast'"
               :label="page.label"
               :icon="page.icon"
               size="small"
            />
         </RouterLink>
      </div>
   </nav>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const crudPages = [
   { name: "organization", label: "Bo'limlar ro'yhati", icon: "pi pi-building" },
   { name: "cause", label: "Qabul shakli", icon: "pi pi-list" },
   { name: "work_environment", label: "Mehnat sharoitlari", icon: "pi pi-bullseye" },
   { name: "education_level", label: "Ta'lim darajasi", icon: "pi pi-graduation-cap" },
   { name: "disability_type", label: "Nogironlik turlari", icon: "pi pi-clone" },
   { name: "quot_type", label: "Kvota turlari", icon: "pi pi-bookmark" },
   { name: "status", label: "Jarayon turlari", icon: "pi pi-tags" },
   { name: "yoriqnoma", label: "Yo'riqnomalar", icon: "pi pi-eraser" },
];
</script>
