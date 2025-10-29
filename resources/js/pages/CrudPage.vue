<template>
   <div class="p-5">
      <nav class="text-right mb-4">
         <Drawer
            :show-close-icon="false"
            position="right"
            v-model:visible="openDrawer"
            header="Yangi xodim qo'shish"
         >
            <BaseForm
               :submit
               :setting-inputs="config.inputs"
               @close="openDrawer = false"
            />
         </Drawer>
         <Button
            icon="pi pi-plus"
            severity="secondary"
            rounded
            :loading="buttonLoading"
            @click="openDrawer = true"
         />
      </nav>

      <CrudTable
         :items="items"
         :columns="config.inputs"
         @edit="openForm"
         @delete="deleteItem"
      />

      <!-- <CrudForm
         v-if="showForm"
         :columns="config.columns"
         :model-value="selectedItem"
         @close="showForm = false"
         @submit="saveItem"
      /> -->
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
import { onMounted, watch, ref, shallowRef } from "vue";
import { useRoute } from "vue-router";
import { crudConfigs } from "@/configs/CrudConfig";
import CrudRepo from "@/repositories/CrudRepo";
import CrudTable from "@/components/CrudTable.vue";
// import CrudForm from "@/components/CrudForm.vue";
const route = useRoute();
const entity = route.params.entity as string;
const crudRepo = new CrudRepo(entity);
const config = shallowRef(crudConfigs[entity]);





const openDrawer = ref(false);
const buttonLoading = ref(false);







const items = ref([]);
const showForm = ref(false);
// const selectedItem = ref<number | null>(null);
const loadingId = ref<number | null>(null);

async function loadData() {
   items.value = await crudRepo.index();
}

function openForm() {
   // selectedItem.value = id;
   showForm.value = true;
}


async function submit(){

}

// async function saveItem(data: any) {
//    if (data.id) await crudRepository.update(config.endpoint, data.id, data);
//    else await crudRepository.store(config.endpoint, data);
//    showForm.value = false;
//    await loadData();
// }

async function deleteItem(id: number) {
   if (confirm("Rostdan ham o‘chirmoqchimisiz?")) {
      loadingId.value = id;
      await crudRepo.delete(id);
      loadingId.value = null;
      await loadData();
   }
}

watch(
   () => route.params.entity,
   async (entity) => {
      crudRepo.endpoint = entity as string;
      await loadData();
      config.value = crudConfigs[crudRepo.endpoint];
   }
);

onMounted(() => {
   loadData();
});
</script>
