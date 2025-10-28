<template>
   <div class="mb-3">
      <component
         :is="props.field.is"
         :name="props.field.name"
         :type="props.field.type"
         :placeholder="props.field.placeholder"
         v-bind="props.field.attr"
         fluid
         size="small"
      />
      <component
         :is="Message"
         v-if="props.inputField?.invalid"
         severity="error"
         size="small"
         variant="simple"
      >
         {{ props.inputField.error.message }}
      </component>
   </div>
</template>

<script setup lang="ts">
import { Message } from "primevue";
import type { IFormInputs } from "@/Interfaces";
const props = defineProps<{
   inputField?: {
      invalid: boolean;
      error: {
         message: string;
      };
   };
   field: IFormInputs;
}>();
</script>
