<template>
   <div class="mb-3">
      <main :class="{'flex items-center gap-2 w-full': props.field.withLabel}">
         <FloatLabel variant="on">
            <component
               :is="props.field.is"
               :name="props.field.name"
               v-bind="props.field.attr"
               v-model="field.value"
               fluid
               :input-id="props.field.name"
               size="small"
            />
            <label
               v-if="props.field.withLabel != true"
               :for="props.field.name"
               class="text-sm text-surface-500"
            >
               {{ props.field.placeholder }}
            </label>
         </FloatLabel>
         <label
            v-if="props.field.withLabel"
            :for="props.field.name"
            class="text-sm text-surface-500 relative top-1"
         >
            {{ props.field.placeholder }}
         </label>
      </main>
      <component
         v-if="props.inputField?.invalid"
         :is="Message"
         severity="error"
         size="small"
         variant="simple"
      >
         {{ props.inputField?.error.message }}
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
