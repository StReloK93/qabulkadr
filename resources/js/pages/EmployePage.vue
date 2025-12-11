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

      <BaseCrudBlock ref="baseCrudBlock" entity="employes" :withSearch="true" :withFilter="true">
         <template #column>
            <Column header="Kiritilgan vaqt">
               <template #body="{ data }">
                  {{ moment(data.created_at).format("DD-MM-YYYY HH:mm") }}
               </template>
            </Column>
            <Column>
               <template #body="{ data }">
                  <Tag :value="data.status?.name" :severity="setSeverity(data.status)"></Tag>
               </template>
            </Column>
            <Column>
               <template #body="{ data }">
                  <Button
                     icon="pi pi-eye"
                     text
                     rounded
                     @click="$router.push({ name: 'employe-id-page', params: { id: data.id } })"
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
import moment from "moment";
import BaseCrudBlock from "@/components/BaseCrudBlock.vue";
import { ref, reactive, onMounted, nextTick } from "vue";
import type { IEmploye } from "@/Interfaces";

const qabulTest = reactive({
   yoriqnomalar: null,
   kadrBoss: "A.B.Butayev",
   mainBoss: "N.N.Amonov",
});

const printPage = ref<number | null>(null);
const selectedEmploye = ref<IEmploye | null>(null);

const baseCrudBlock = ref<{ loadData: Function }>();

function setSeverity(status) {
   if (status == null) return "secondary";
   const sever = ["secondary", "success", "info", "warn", "danger", "contrast"];
   return sever[status.id];
}

async function onPrintPage({ page, employe }) {
   selectedEmploye.value = employe;
   printPage.value = page;
   await nextTick();
   window.print();
}

onMounted(async () => {
   window.onafterprint = function () {
      printPage.value = null;
   };
   qabulTest.yoriqnomalar = await new CrudRepo("yoriqnoma").all();
});
</script>
