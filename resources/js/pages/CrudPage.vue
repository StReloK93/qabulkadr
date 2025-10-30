<template>
   <div>
      <nav class="flex justify-end mb-4">
         <Drawer
            :show-close-icon="false"
            position="right"
            v-model:visible="openDrawer"
            :header="selectedRow ? 'Tahrirlash' : 'Kiritish'"
            @hide="selectedRow = null"
         >
            <BaseForm
               :submit
               :setting-inputs="configInputs"
               @on-submit="loadData"
               @close="openDrawer = false"
            />
         </Drawer>
         <div>
            <Button
               v-if="configInputs"
               icon="pi pi-plus"
               rounded
               :loading="createButtonLoading"
               @click="openCreateForm"
            />
            <Skeleton
               v-else
               shape="circle"
               size="40px"
            />
         </div>
      </nav>
      <CrudTable
         v-if="configColumns"
         :items="items"
         :columns="configColumns"
         :edit-button-loading
         :delete-button-loading
         @edit="openEditForm"
         @delete="deleteItem"
      />
      <Skeleton
         v-else
         width="100%"
         height="300px"
      />
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
import { onMounted, watch, ref, shallowRef, type Ref } from "vue";
import { useRoute } from "vue-router";
import { crudConfigs, inputValues } from "@/configs/CrudConfig";
import CrudRepo from "@/repositories/CrudRepo";
import CrudTable from "@/components/CrudTable.vue";
const route = useRoute();
const crudRepo = new CrudRepo(route.params.entity as string);
let submit: (values: unknown) => Promise<void>;

const configColumns = shallowRef(crudConfigs[crudRepo.endpoint].columns);
const configInputs = shallowRef(crudConfigs[crudRepo.endpoint].inputs);

const openDrawer = ref(false);
const createButtonLoading = ref(false);
const editButtonLoading: Ref<null | number> = ref(null);
const deleteButtonLoading: Ref<null | number> = ref(null);
const selectedRow: Ref<null | number> = ref(null);

const items: Ref<unknown[]> = ref([]);

async function loadData() {
   items.value = await crudRepo.index();
}



async function openCreateForm() {
   configInputs.value = crudConfigs[crudRepo.endpoint].inputs;
   submit = async (data) => await crudRepo.store(data);
   openDrawer.value = true;
}

async function openEditForm(id) {
   editButtonLoading.value = id;
   selectedRow.value = id
   submit = async (data) => await crudRepo.update(id, data);
   const result = (await crudRepo.show(id)) as object;
   configInputs.value = inputValues(crudConfigs[crudRepo.endpoint].inputs, result);

   openDrawer.value = true;
   editButtonLoading.value = null;
}

async function deleteItem(id: number) {
   deleteButtonLoading.value = id;
   await crudRepo.delete(id);
   deleteButtonLoading.value = null;
   await loadData();
}

watch(
   () => route.params.entity,
   async (currentEntity) => {
      configInputs.value = null
      configColumns.value = null
      crudRepo.endpoint = currentEntity as string;
      await loadData();
      configInputs.value = crudConfigs[crudRepo.endpoint].inputs;
      configColumns.value = crudConfigs[crudRepo.endpoint].columns;
   }
);

onMounted(() => {
   loadData();
});
</script>
