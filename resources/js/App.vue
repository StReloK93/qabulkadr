<template>
   <SplashScreen v-if="UserStore.initialized == false" />
   <RouterView
      v-else
      class="h-dvh"
   />
</template>
<script setup lang="ts">
import SplashScreen from '@/components/BaseSplashScreen.vue';
import { useUserStore } from './stories/UserStore';

const UserStore = useUserStore();

</script>
