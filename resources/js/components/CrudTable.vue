<template>
   <Card class="shadow-none! border border-surface-200 dark:border-surface-800">
      <template #header />
      <template #content>
         <DataTable
            :value="items"
            table-style="min-width: 50rem"
            size="small"
         >
            <Column
               v-for="col in columns"
               :key="col.name"
               :field="col.name"
               :header="col.placeholder"
            />
            <Column
               body-style="text-align:center;width:10rem"
            >
               <template #body="{ data }">
                  <Button
                     icon="pi pi-pencil"
                     text
                     rounded
                     @click="emit('edit', data.id)"
                  />
                  <Button
                     icon="pi pi-trash"
                     text
                     rounded
                     severity="danger"
                     @click="emit('delete', data.id)"
                  />
               </template>
            </Column>
         </DataTable>
      </template>
   </Card>
</template>

<script setup lang="ts">
const emit = defineEmits<{
   (e: "edit", id: number): void;
   (e: "delete", id: number): void;
}>();

defineProps<{
   items: [];
   columns: [
      {
         name: string;
         placeholder: string;
      }
   ];
}>();
</script>
