<template>
   <div>
      Home Page

      <Button @click="logout">
         Logout
      </Button>
   </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stories/UserStore";
const UserStore = useUserStore();
function logout() {
   UserStore.logout();
}
</script>
