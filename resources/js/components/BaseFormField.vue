<template>
   <div class="mb-4">
      <InputText
         :name="props.field.name"
         :type="props.field.type"
         :placeholder="props.field.placeholder"
         size="small"
         fluid
      />
      <Message
         v-if="props.inputField?.invalid"
         severity="error"
         size="small"
         variant="simple"
      >
         {{ props.inputField.error.message }}
      </Message>
   </div>
</template>

<script setup lang="ts">
const props = defineProps<{
   inputField?: {
      invalid: boolean;
      error: {
         message: string;
      };
   };
   field: {
      name: string;
      placeholder: string;
      type: string;
   };
}>();
</script>
