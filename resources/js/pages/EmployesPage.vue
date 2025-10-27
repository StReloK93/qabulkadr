<template>
   <div>
      <CreateEmployeForm />
      <Card class="shadow-none! border border-surface-200 dark:border-surface-800">
         <template #header />
         <template #content>
            <DataTable
               :value="products"
               table-style="min-width: 50rem"
            >
               <Column
                  field="full_name"
                  header="F.I.SH"
               />
               <Column
                  field="organization"
                  header="Bo'lim"
               />
               <Column
                  field="profession"
                  header="Lavozim"
               />
               <Column
                  field="status"
                  header="Holat"
               />
            </DataTable>
         </template>
      </Card>
   </div>
</template>

<script setup lang="ts">
import CreateEmployeForm from '@/components/employes/CreateEmployeForm.vue';
const products = [
   { code: "P1001", name: "Product 1", category: "Category A", quantity: 10 },
   { code: "P1002", name: "Product 2", category: "Category B", quantity: 20 },
   { code: "P1003", name: "Product 3", category: "Category A", quantity: 15 },
   { code: "P1004", name: "Product 4", category: "Category C", quantity: 5 },
];
</script>
