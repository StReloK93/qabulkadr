<template>
   <Form
      v-slot="$form"
      ref="instance"
      :initial-values
      :resolver
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full"
   >
      <div class="flex flex-col">
         <slot :form="$form" />
      </div>
      <div class="grow" />
      <main class="flex gap-3">
         <Button
            type="button"
            size="small"
            severity="secondary"
            @click="emit('close')"
            label="Bekor qilish"
            :fluid="true"
         />
         <Button type="submit" size="small" severity="contrast" label="Saqlash" :fluid="true" :loading="buttonLoader" />
      </main>
   </Form>
</template>

<script setup lang="ts">
import type { FormResolverOptions, FormSubmitEvent } from "@primevue/forms";
import { ref } from "vue";
const instance = ref();

const emit = defineEmits(["close"]);

const buttonLoader = ref(false);

type FormResolver = (options: FormResolverOptions) => Record<string, any> | Promise<Record<string, any>> | undefined;
const props = defineProps<{
   initialValues: object;

   resolver: FormResolver;
   submit: (values: unknown) => Promise<void>;
}>();

const onFormSubmit = async (formEvent: FormSubmitEvent) => {
   console.log(formEvent);

   if (formEvent.valid) {
      buttonLoader.value = true;
      await props.submit(formEvent.values).finally(() => {
         buttonLoader.value = false;
      });
   }
};

defineExpose({ instance });
</script>
