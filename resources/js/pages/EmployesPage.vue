<template>
   <div>
      <BaseForm
         @submit="
            async (values) => {
               console.log(values);
            }
         "
      >
         <template #title> Xodim qo'shish </template>

         <template #default>
            <div class="flex flex-col gap-1">
               <InputText name="username" type="text" placeholder="Username" />
            </div>
            <div class="flex flex-col gap-1">
               <InputText name="email" type="text" placeholder="Email" />
            </div>
         </template>
      </BaseForm>
      <Card class="shadow-none! border border-surface-200">
         <template #header />
         <template #content>
            <DataTable :value="products" table-style="min-width: 50rem">
               <Column field="code" header="Code" />
               <Column field="name" header="Name" />
               <Column field="category" header="Category" />
               <Column field="quantity" header="Quantity" />
            </DataTable>
         </template>
      </Card>
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
const products = [
   { code: "P1001", name: "Product 1", category: "Category A", quantity: 10 },
   { code: "P1002", name: "Product 2", category: "Category B", quantity: 20 },
   { code: "P1003", name: "Product 3", category: "Category A", quantity: 15 },
   { code: "P1004", name: "Product 4", category: "Category C", quantity: 5 },
];
</script>
