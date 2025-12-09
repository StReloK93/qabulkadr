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
                  <InputText
                     v-model="queryParams.search"
                     @input="onClearInput"
                     placeholder="Qidiruv"
                     size="small"
                  />
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
               <div class="flex gap-2 items-center">
                  <slot name="buttons"></slot>
                  <Button
                     icon="pi pi-file-excel"
                     @click="exportExcel"
                     size="small"
                     rounded
                     variant="text"
                  />

                  <BaseCrudFilter
                     v-if="props.withSearch"
                     @filter="onFilter"
                     :entity
                     :startData="queryParams.filters"
                  />
                  <Button
                     v-if="queryParams.filters != null"
                     @click="clearFilters"
                     icon="pi pi-times"
                     aria-label="Save"
                     size="small"
                     severity="danger"
                     rounded
                     variant="text"
                  />
               </div>
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
import BaseCrudFilter from "./BaseCrudFilter.vue";
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
      withFilter?: boolean;
   }>(),
   {
      addButton: true,
      withSearch: false,
      withFilter: false,
   }
);

const queryParams = reactive<{ page: null | number; search: null | string; filters: object | null }>({
   page: null,
   search: null,

   filters: null,
});

async function onFilter(params) {
   queryParams.filters = params;
   queryParams.page = 1;
   await loadData();
}

async function clearFilters() {
   queryParams.filters = null;
   await loadData();
}

const crudRepo = new CrudRepo(props.entity);
let submit: (values: unknown) => Promise<void>;

const configColumns: Ref<any> = shallowRef(columns(crudConfigs[crudRepo.endpoint].inputs));
const configInputs: Ref<any> = shallowRef(null);

const openDrawer = ref(false);
const createButtonLoading = ref(false);
const editButtonLoading: Ref<null | number> = ref(null);
const deleteButtonLoading: Ref<null | number> = ref(null);
const selectedRow: Ref<null | number> = ref(null);

async function onClearInput() {
   if (queryParams.search == "") {
      queryParams.page = 1;
      await loadData();
   }
}

interface ICrudData {
   data: null | any[];
   total: null | number;
   per_page: null | number;
   loading: boolean;
}

const crudData = reactive<ICrudData>({
   data: null,
   total: null,
   per_page: null,
   loading: false,
});

async function onSearch() {
   if (queryParams.search?.trim() == "") return;
   await loadData();
}

async function onPage(pageState) {
   if (queryParams.page == pageState.page + 1) return;
   crudData.loading = true;
   queryParams.page = pageState.page + 1;
   await loadData();
   crudData.loading = false;
}

async function loadData() {
   crudData.loading = true;

   try {
      const paginator = await crudRepo.index<IPaginator>({
         page: queryParams.page,
         search: queryParams.search,
         ...queryParams.filters,
      });

      queryParams.page = paginator.current_page;
      crudData.data = paginator.data;
      crudData.total = paginator.total;
      crudData.per_page = paginator.per_page;
   } finally {
      crudData.loading = false;
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

async function exportExcel() {
   const response = await crudRepo.exportExcel<BlobPart>({
      ...queryParams.filters,
   });

   const url = window.URL.createObjectURL(new Blob([response]));
   const link = document.createElement("a");
   link.href = url;

   link.setAttribute("download", `${crudConfigs[crudRepo.endpoint].title}.xlsx`); // Excel fayl nomi
   document.body.appendChild(link);
   link.click();
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
