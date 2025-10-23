<template>
   <Form
      ref="formRef"
      :initial-values="props.initialValues"
      @submit="handleSubmit"
      class="space-y-4"
   >
      <!-- Title -->
      <h2
         v-if="props.title"
         class="text-xl font-semibold mb-2"
      >
         {{ props.title }}
      </h2>

      <!-- Fields -->
      <slot />

      <!-- Actions -->
      <div class="flex justify-end gap-2 pt-4">
         <Button
            v-if="props.cancelText"
            :label="props.cancelText"
            severity="secondary"
            @click="props.onCancel"
            :disabled="loading"
         />
         <Button
            type="submit"
            :label="props.submitText ?? 'Submit'"
            :loading="loading"
         />
      </div>
   </Form>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface Props {
   title?: string;
   onSubmit: (values: Record<string, any>) => Promise<void> | void;
   initialValues?: Record<string, any>;
   submitText?: string;
   cancelText?: string;
   onCancel?: () => void;
}

const props = defineProps<Props>();

const loading = ref(false);
const formRef = ref();

const handleSubmit = async (params: any) => {
   if (!params.valid) return;

   try {
      loading.value = true;
      await props.onSubmit(params.values);
   } finally {
      loading.value = false;
   }
};
</script>
