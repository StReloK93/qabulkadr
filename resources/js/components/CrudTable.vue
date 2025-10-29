<template>
   <Card class="shadow-none! border border-surface-200 dark:border-surface-800">
      <template #header />
      <template #content>
         <DataTable
            :value="items"
            size="small"
         >
            <Column
               v-for="col in columns"
               :key="col.name"
               :field="col.name"
               :header="col.placeholder"
            />
            <Column body-style="text-align:center;width:10rem">
               <template #body="{ data }">
                  <Button
                     icon="pi pi-pencil"
                     text
                     rounded
                     :loading="props.editButtonLoading == data.id"
                     @click="emit('edit', data.id)"
                  />
                  <Button
                     icon="pi pi-trash"
                     text
                     rounded
                     severity="danger"
                     :loading="props.deleteButtonLoading == data.id"
                     @click="confirmDelete($event, data.id)"
                  />
               </template>
            </Column>
         </DataTable>
      </template>
   </Card>
</template>

<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();

const confirmDelete = (event, id:number) => {
   confirm.require({
      target: event.currentTarget,
      message: "Aniq o'chirmoqchimisiz (Malumot qayta tiklanmaydi)?",
      icon: "pi pi-exclamation-triangle",
      rejectProps: {
         label: "Bekor qilish",
         severity: "secondary",
         outlined: true,
      },
      acceptProps: {
         label: "O'chirish",
         severity: "danger",
      },
      accept: () => {
         emit("delete", id);
      },
      reject: () => {

      },
   });
};

const emit = defineEmits<{
   (e: "edit", id: number): void;
   (e: "delete", id: number): void;
}>();

const props = defineProps<{
   items: unknown[];
   columns: [
      {
         name: string;
         placeholder: string;
      }
   ];
   editButtonLoading: number | null;
   deleteButtonLoading: number | null;
}>();
</script>
