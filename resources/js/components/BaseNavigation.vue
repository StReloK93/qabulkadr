<template>
   <nav class="p-3 border-r border-r-surface-200 dark:border-r-surface-800 w-80 bg-white dark:bg-surface-950">
      <div class="flex items-center gap-3 mb-8 px-2">
         <img
            :src="`/logo.svg`"
            class="w-12 dark:invert"
         >
         <span class="text-lg font-semibold text-surface-700 dark:text-surface-300 leading-3 font-[Trickster]"> QabulHR </span>
      </div>
      <div class="flex justify-center flex-col gap-1.5">
         <p class="text-xs text-surface-600 dark:text-surface-400 px-3">
            Asosiy bo'lim
         </p>
         <RouterLink
            class="w-full"
            :to="{ name: 'dashboard-page' }"
         >
            <Button
               class="w-full justify-start! border border-surface-300"
               variant="text"
               severity="contrast"
               label="Dashboard"
               icon="pi pi-home"
               size="small"
            />
         </RouterLink>
         <RouterLink
            class="w-full"
            :to="{ name: 'employes-page' }"
         >
            <Button
               class="w-full justify-start! border border-surface-300"
               variant="text"
               severity="contrast"
               label="Xodimlar"
               icon="pi pi-users"
               size="small"
            />
         </RouterLink>
         <Divider />
         <p class="text-xs text-surface-600 dark:text-surface-400 px-3">
            Qo'llanmalar
         </p>

         <RouterLink
            v-for="page in crudPages"
            class="w-full"
            :to="{ name: 'crud-page' , params: { entity: page.name } }"
            :key="page.name"
         >
            <Button
               class="w-full justify-start! border border-surface-300"
               variant="text"
               severity="contrast"
               :label="page.label"
               :icon="page.icon"
               size="small"
            />
         </RouterLink>
      </div>
   </nav>
</template>
<script setup lang="ts">


const crudPages = [
   { name: 'organizations', label: "Bo'limlar ro'yhati", icon: 'pi pi-building' },
   { name: 'causes', label: "Asoslar ro'yhati", icon: 'pi pi-list' },
];
</script>