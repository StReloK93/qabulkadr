<template>
   <CrudPage>
      <template #column>
         <Column body-style="text-align:center;width:6rem">
            <template #body="{ data }">
               {{ data.status }}
               <!-- <Button icon="pi pi-trash" text rounded severity="danger" /> -->
            </template>
         </Column>
      </template>

      <template #buttons>
         <Button icon="pi pi-filter" size="small" rounded variant="text" />
      </template>
   </CrudPage>
</template>

<script setup lang="ts">
import CrudPage from "./CrudPage.vue";
</script>
