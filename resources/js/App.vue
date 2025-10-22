<template>
   <RouterView class="h-dvh" />
</template>
<script setup lang="ts">
import { useUserStore } from './stories/UserStore';

const UserStore = useUserStore();
UserStore.getAuthUser();

</script>
