<template>
   <div>
      <main class="flex justify-between">
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

         <div v-if="props.withSearch">
            <Form @submit="onSearch">
               <InputGroup>
                  <InputText v-model="crudData.searchText" placeholder="Qidiruv" size="small" />
                  <Button icon="pi pi-search" size="small" type="submit" />
               </InputGroup>
            </Form>
         </div>
      </main>

      <Card
         v-if="configColumns && crudData.data != null"
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
                     v-if="props.addButton"
                     icon="pi pi-plus"
                     rounded
                     size="small"
                     :loading="createButtonLoading"
                     @click="openCreateForm"
                  />
               </div>
            </nav>
         </template>
         <template #content>
            <CrudTable
               v-if="crudData.loading == false"
               :items="crudData.data"
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
            <Skeleton v-else border-radius="15px" width="100%" height="562px" />
            <Paginator
               v-if="crudData.total! > crudData.per_page!"
               @page="onPage"
               :rows="crudData.per_page!"
               :totalRecords="crudData.total!"
            ></Paginator>
         </template>
      </Card>
      <Skeleton v-else border-radius="15px" width="100%" height="300px" />
   </div>
</template>

<script setup lang="ts">
import BaseForm from "@/components/BaseForm.vue";
import { onMounted, watch, ref, shallowRef, type Ref, reactive } from "vue";
import { crudConfigs, inputValues, columns, generateAttributes } from "@/configs/CrudConfig";
import CrudRepo from "@/repositories/CrudRepo";
import CrudTable from "@/components/CrudTable.vue";
import type { IPaginator } from "@/Interfaces";
const props = withDefaults(
   defineProps<{
      entity: string;
      addButton?: boolean;
      withSearch?: boolean;
   }>(),
   {
      addButton: true,
      withSearch: false,
   }
);

const crudRepo = new CrudRepo(props.entity);
let submit: (values: unknown) => Promise<void>;

const configColumns: Ref<any> = shallowRef(columns(crudConfigs[crudRepo.endpoint].inputs));
const configInputs: Ref<any> = shallowRef(null);

const openDrawer = ref(false);
const createButtonLoading = ref(false);
const editButtonLoading: Ref<null | number> = ref(null);
const deleteButtonLoading: Ref<null | number> = ref(null);
const selectedRow: Ref<null | number> = ref(null);

interface ICrudData {
   data: null | any[];
   total: null | number;
   per_page: null | number;
   current_page: null | number;
   loading: boolean;
   searchText: string;
}

const crudData = reactive<ICrudData>({
   data: null,
   total: null,
   per_page: null,
   current_page: null,
   loading: false,
   searchText: "",
});

async function onSearch() {
   await loadData({ search: crudData.searchText });
}

async function onPage(pageState) {
   if (crudData.current_page == pageState.page + 1) return;
   crudData.loading = true;
   await loadData({ page: pageState.page + 1, search: crudData.searchText });
   crudData.loading = false;
}

async function loadData(params) {
   try {
      const paginator = await crudRepo.index<IPaginator>(params);

      crudData.current_page = paginator.current_page;
      crudData.data = paginator.data;
      crudData.total = paginator.total;
      crudData.per_page = paginator.per_page;
   } catch (error) {
      console.error("Xatolik:", error);
      crudData.data = [];
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
   console.log(inputValues(fullInputs, result));

   configInputs.value = inputValues(fullInputs, result);
   openDrawer.value = true;
   editButtonLoading.value = null;
}

async function deleteItem(id: number) {
   deleteButtonLoading.value = id;
   await crudRepo.delete(id);
   deleteButtonLoading.value = null;
   await loadData({ page: crudData.current_page });
}

watch(
   () => props.entity,
   async (currentEntity) => {
      configInputs.value = null;
      configColumns.value = null;
      crudRepo.endpoint = currentEntity as string;
      await loadData({ page: crudData.current_page });
      configInputs.value = crudConfigs[crudRepo.endpoint].inputs;
      configColumns.value = columns(crudConfigs[crudRepo.endpoint].inputs);
   }
);

defineExpose({ loadData });

onMounted(() => {
   loadData({ page: crudData.current_page });
});
</script>
