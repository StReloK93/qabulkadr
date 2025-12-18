<template>
   <section class="relative" id="employe-page">
      <Teleport to="body">
         <PrintTibbiyYollanma :employe="selectedEmploye" v-if="selectedEmploye && printPage == 1" />
         <PrintQabulVaraqa
            :employe="selectedEmploye"
            :qabul="qabulTest"
            v-if="selectedEmploye && printPage == 2"
         />
      </Teleport>
      <RouterView @updateEmploye="baseCrudBlock?.loadData()" @onPrintPage="onPrintPage" />

      <BaseCrudBlock
         ref="baseCrudBlock"
         entity="finished_employes"
         :withSearch="true"
         :withFilter="true"
      >
         <template #column>
            <Column>
               <template #body="{ data }">
                  <Button
                     icon="pi pi-eye"
                     text
                     rounded
                     @click="$router.push({ name: 'finished-employe-id-page', params: { id: data.id } })"
                  />
                  <Button
                     icon="pi pi-print"
                     text
                     rounded
                     @click="onPrintPage({ page: 2, employe: data })"
                  />
               </template>
            </Column>
         </template>
      </BaseCrudBlock>
   </section>
</template>
<script setup lang="ts">
import PrintTibbiyYollanma from "@/components/PrintTibbiyYollanma.vue";
import PrintQabulVaraqa from "@/components/PrintQabulVaraqa.vue";
import CrudRepo from "@/repositories/CrudRepo";
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
import { ref, reactive, onMounted, nextTick } from "vue";
import type { IEmploye } from "@/Interfaces";

const qabulTest = reactive<any>({
   yoriqnomalar: null,
   kadrBoss: null,
});

const printPage = ref<number | null>(null);
const selectedEmploye = ref<IEmploye | null>(null);

const baseCrudBlock = ref<{ loadData: Function }>();

async function onPrintPage({ page, employe }) {
   selectedEmploye.value = employe;
   printPage.value = page;
   await nextTick();
   window.print();
}

onMounted(async () => {
   qabulTest.yoriqnomalar = await new CrudRepo("yoriqnoma").all();
   const result = (await new CrudRepo("rahbar").all()) as [any, any, any];

   qabulTest.kadrBoss = result[2];
});
</script>
