<template>
   <section class="relative" id="employe-page">
      <Teleport to="body">
         <PrintSuhbatVaraqa :suhbat="selected" :kadrBoss="kadrBoss!" v-if="selected && printPage == 1" />
      </Teleport>
      <RouterView @updateEmploye="baseCrudBlock?.loadData()" />

      <BaseCrudBlock ref="baseCrudBlock" entity="suhbat" :withSearch="true" :withFilter="true">
         <template #column>
            <Column>
               <template #body="{ data }">
                  <Button
                     icon="pi pi-print"
                     text
                     rounded
                     @click="onPrintPage({ page: 1, suhbat: data })"
                  />
               </template>
            </Column>
         </template>
      </BaseCrudBlock>
   </section>
</template>
<script setup lang="ts">
import PrintSuhbatVaraqa from "@/components/PrintSuhbatVaraqa.vue";
import CrudRepo from "@/repositories/CrudRepo";
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
import { ref, reactive, onMounted, nextTick } from "vue";
import type { ISuhbat } from "@/Interfaces";

const kadrBoss = ref();

const printPage = ref<number | null>(null);
const selected = ref<ISuhbat | null>(null);

const baseCrudBlock = ref<{ loadData: Function }>();

async function onPrintPage({ page, suhbat }) {
   selected.value = suhbat;
   printPage.value = page;
   await nextTick();
   window.print();
}

onMounted(async () => {
   const result = (await new CrudRepo("rahbar").all()) as [any, any, any];
   kadrBoss.value = result[2];
});
</script>
