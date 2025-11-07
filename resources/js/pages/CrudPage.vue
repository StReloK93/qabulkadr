<template>
   <BaseCrudBlock :entity="($route.params.entity as string)" />
</template>

<script setup lang="ts">
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
</script>
