<template>
   <Button
      icon="pi pi-filter"
      @click="openFilterForm"
      size="small"
      label="Filterlash"
      rounded
      variant="text"
   />

   <Popover ref="popover">
      <section class="w-100">
         <Skeleton v-if="filterData.buttonLoader" width="100%" height="424px" />
         <BaseForm v-else :submit="submit" @close="popover.hide()" :setting-inputs="configInputs!" />
      </section>
   </Popover>
</template>

<script setup lang="ts">
import BaseForm from "./BaseForm.vue";
import { generateAttributes } from "@/configs/CrudConfig";
import { filterConfig } from "@/configs/FilterConfig";
import type { IFormInputs } from "@/Interfaces";
import { reactive, ref, shallowRef } from "vue";
const popover = ref();

const props = defineProps<{
   entity: string;
   startData: object | null;
}>();

const filterData = reactive<{
   buttonLoader: boolean;
}>({
   buttonLoader: false,
});

async function submit(params) {
   const allUndefined = Object.values(params).every((v) => v === undefined);
   if (!allUndefined) emit("filter", params);
}

const configInputs = shallowRef<IFormInputs[]>();
const emit = defineEmits(["filter"]);

async function openFilterForm(event) {
   popover.value.toggle(event);

   filterData.buttonLoader = true;

   const fullInputs = await generateAttributes(filterConfig[props.entity].inputs);
   fullInputs.forEach((input) => {
      if (props.startData && props.startData[input.name]) {
         input.value = props.startData[input.name];
      } else input.value = undefined;
   });

   configInputs.value = fullInputs;
   filterData.buttonLoader = false;
}
</script>
