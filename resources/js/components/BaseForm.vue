<template>
   <Form
      v-slot="$form"
      ref="instance"
      :initial-values
      :resolver
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full h-full pt-2"
   >
      <div class="flex flex-col">
         <BaseFormField
            v-for="settingInput in props.settingInputs"
            :field="settingInput"
            :input-field="$form[settingInput.name]!"
            :key="settingInput.name"
         />
      </div>
      <div class="grow" />
      <main class="flex gap-3 pb-4 -mb-4">
         <Button
            type="button"
            size="small"
            severity="secondary"
            @click="emit('close')"
            label="Bekor qilish"
            :fluid="true"
         />
         <Button
            type="submit"
            size="small"
            label="Saqlash"
            :fluid="true"
            :loading="buttonLoader"
         />
      </main>
   </Form>
</template>

<script setup lang="ts">
import BaseFormField from "@/components/BaseFormField.vue";
import * as yup from "yup";
import type { FormSubmitEvent } from "@primevue/forms";
import { yupResolver } from "@primevue/forms/resolvers/yup";
import { reactive, ref } from "vue";
import type { IFormInputs } from "@/Interfaces";
const instance = ref();

const emit = defineEmits(["close", "onSubmit"]);

const buttonLoader = ref(false);

const props = defineProps<{
   settingInputs: IFormInputs[];
   submit: (values: unknown) => Promise<void>;
}>();

const onFormSubmit = async (formEvent: FormSubmitEvent) => {
   if (formEvent.valid) {
      buttonLoader.value = true;
      await props.submit(formEvent.values).finally(() => {
         buttonLoader.value = false;
      });

      emit("onSubmit");
      emit("close");
   }
};

const initialValues = reactive(
   props.settingInputs.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
   }, {} as Record<string, unknown>)
);

const resolver = yupResolver(
   yup.object(
      props.settingInputs.reduce((acc, curr) => {
         acc[curr.name] = curr.schema;
         return acc;
      }, {} as Record<string, yup.AnySchema>)
   )
);

defineExpose({ instance });
</script>
