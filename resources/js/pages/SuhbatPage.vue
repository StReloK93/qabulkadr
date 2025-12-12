<template>
   <section class="relative" id="employe-page">
      <Teleport to="body">
         <PrintSuhbatVaraqa :suhbat="selected" v-if="selected && printPage == 1" />
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
import { api } from "@/helpers/useFetch";
import moment from "moment";
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
import { ref, reactive, onMounted, nextTick } from "vue";
import type { ISuhbat } from "@/Interfaces";

const qabulTest = reactive({
   yoriqnomalar: null,
   kadrBoss: "A.B.Butayev",
   mainBoss: "N.N.Amonov",
});

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
   qabulTest.yoriqnomalar = await new CrudRepo("yoriqnoma").all();
});
</script>
