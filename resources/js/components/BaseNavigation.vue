<template>
   <nav class="p-3 border-r border-r-surface-200 w-80">
      <div class="flex items-center gap-3 mb-8">
         <img
            src="http://127.0.0.1:8000/logo.svg"
            class="w-12"
         >
         <span class="text-lg font-semibold text-surface-700 leading-3 font-[Trickster]"> QabulHR </span>
      </div>
      <div class="flex justify-center flex-col gap-1.5">
         <p class="text-xs text-surface-600 px-3">
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
      </div>
   </nav>
</template>
