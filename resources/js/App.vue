<template>
   <PrintQabulVaraqa class="bg-gray-200" />
   <!-- <ConfirmPopup class="print:hidden" />
   <SplashScreen class="print:hidden" v-if="UserStore.initialized == false" />
   <RouterView class="print:hidden h-dvh" v-else /> -->
</template>
<script setup lang="ts">
import SplashScreen from "@/components/BaseSplashScreen.vue";
import { useUserStore } from "./stories/UserStore";
import PrintQabulVaraqa from "./components/PrintQabulVaraqa.vue";

const UserStore = useUserStore();
</script>
