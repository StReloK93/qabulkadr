<template>
   <main class="p-1">
      <DataTable
         class="border border-surface-200 dark:border-surface-800 rounded-xl overflow-hidden no-last-border text-sm"
         :value="items"
         size="small"
      >
         <Column body-style="text-align:center;width:3rem" field="id" header="ID" header-class="px-4!" />
         <Column v-for="col in columns" :key="col.name" :field="col.name" :header="col.placeholder" />
         <slot name="column"></slot>

         <Column
            v-if="!crudConfig.editButtonHide || !crudConfig.deleteButtonHide"
            body-style="text-align:center;width:6rem"
         >
            <template #body="{ data }">
               <Button
                  v-if="!crudConfig.editButtonHide"
                  icon="pi pi-pencil"
                  text
                  severity="info"
                  rounded
                  :loading="props.editButtonLoading == data.id"
                  @click="emit('edit', data.id)"
               />
               <Button
                  v-if="!crudConfig.deleteButtonHide"
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
   </main>
</template>

<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();

const confirmDelete = (event, id: number) => {
   confirm.require({
      target: event.currentTarget,
      message: "Aniq o'chirmoqchimisiz - Malumot qayta tiklanmaydi?",
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
   });
};

const emit = defineEmits<{
   (e: "edit", id: number): void;
   (e: "delete", id: number): void;
}>();

const props = defineProps<{
   items: unknown[] | null;
   columns: [
      {
         name: string;
         placeholder: string;
      }
   ];
   crudConfig: {
      editButtonHide: boolean;
      deleteButtonHide: boolean;
   };
   editButtonLoading: number | null;
   deleteButtonLoading: number | null;
}>();
</script>
<style>
.no-last-border .p-datatable-tbody > tr:last-child > td {
   border-bottom: none !important;
}
</style>
