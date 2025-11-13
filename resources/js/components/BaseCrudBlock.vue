<template>
   <div>
      <Breadcrumb
         :home="{
            label: crudConfigs[crudRepo.endpoint].parentTitle,
         }"
         :model="[{ label: crudConfigs[crudRepo.endpoint].title }]"
         class="bg-transparent!"
      >
         <template #separator>
            <i class="pi pi-angle-right" />
         </template>
      </Breadcrumb>
      <Card
         v-if="configColumns && items != null"
         class="shadow-none! rounded-2xl! border border-surface-200 dark:border-surface-800 overflow-hidden"
      >
         <template #header>
            <nav
               class="flex justify-between items-center px-6 py-3 border-b border-surface-200 dark:border-surface-800"
            >
               <div>
                  <slot name="buttons"></slot>
               </div>
               <Dialog
                  class="w-1/3"
                  modal
                  pt:mask:class="backdrop-blur-xs"
                  :show-close-icon="false"
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
               </Dialog>
               <div>
                  <Button
                     icon="pi pi-plus"
                     rounded
                     severity="secondary"
                     :loading="createButtonLoading"
                     @click="openCreateForm"
                  />
               </div>
            </nav>
         </template>
         <template #content>
            <CrudTable
               :items="items"
               :columns="configColumns"
               :edit-button-loading
               :delete-button-loading
               @edit="openEditForm"
               @delete="deleteItem"
            >
               <template #column>
                  <slot name="column"></slot>
               </template>
            </CrudTable>
         </template>
      </Card>
      <Skeleton v-else border-radius="15px" width="100%" height="300px" />
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
import { onMounted, watch, ref, shallowRef, type Ref } from "vue";
import { crudConfigs, inputValues, columns, generateAttributes } from "@/configs/CrudConfig";
import CrudRepo from "@/repositories/CrudRepo";
import CrudTable from "@/components/CrudTable.vue";
const props = defineProps<{
   entity: string;
}>();
const crudRepo = new CrudRepo(props.entity);
let submit: (values: unknown) => Promise<void>;

const configColumns: Ref<any> = shallowRef(columns(crudConfigs[crudRepo.endpoint].inputs));
const configInputs: Ref<any> = shallowRef(null);

const openDrawer = ref(false);
const createButtonLoading = ref(false);
const editButtonLoading: Ref<null | number> = ref(null);
const deleteButtonLoading: Ref<null | number> = ref(null);
const selectedRow: Ref<null | number> = ref(null);

const items: Ref<unknown[] | null> = ref(null);

async function loadData() {
   try {
      items.value = await crudRepo.index();
   } catch (error) {
      console.error("Xatolik:", error);
      items.value = [];
   }
}

async function openCreateForm() {
   createButtonLoading.value = true;
   submit = async (data) => await crudRepo.store(data);

   const fullInputs = await generateAttributes(crudConfigs[crudRepo.endpoint].inputs);

   configInputs.value = fullInputs;
   openDrawer.value = true;
   createButtonLoading.value = false;
}

async function openEditForm(id) {
   submit = async (data) => await crudRepo.update(id, data);
   editButtonLoading.value = id;
   selectedRow.value = id;

   const result = (await crudRepo.show(id)) as object;
   const fullInputs = await generateAttributes(crudConfigs[crudRepo.endpoint].inputs);

   configInputs.value = inputValues(fullInputs, result);
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
   () => props.entity,
   async (currentEntity) => {
      configInputs.value = null;
      configColumns.value = null;
      crudRepo.endpoint = currentEntity as string;
      await loadData();
      configInputs.value = crudConfigs[crudRepo.endpoint].inputs;
      configColumns.value = columns(crudConfigs[crudRepo.endpoint].inputs);
   }
);

defineExpose({ loadData });

onMounted(() => {
   loadData();
});
</script>
