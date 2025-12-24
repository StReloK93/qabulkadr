<template>
   <section>
      <main class="flex justify-between">
         <Breadcrumb
            :home="{ label: `Asosiy bo'\lim` }"
            :model="[{ label: 'Dashboard' }]"
            class="bg-transparent!"
         >
            <template #separator>
               <i class="pi pi-angle-right" />
            </template>
         </Breadcrumb>
         <div>
            <DatePicker
               v-model="date"
               @value-change="getDashboardInformation"
               view="month"
               dateFormat="mm/yy"
               size="small"
               :disabled="true"
               iconDisplay="input"
               :showIcon="true"
            />
         </div>
      </main>
      <h3 class="px-2 mb-2 text-xl dark:text-surface-300">Jarayondagi Xodimlar</h3>
      <main class="flex gap-2 mb-2">
         <Card
            class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none! grow"
         >
            <template #title>
               <div class="text-blue-400 font-light">Jarayon turlari bo'yicha</div>
            </template>
            <template #content>
               <main class="flex gap-2 justify-between">
                  <div class="w-32">
                     <main class="text-surface-400 font-light mb-2">Umumiy</main>
                     <main class="-mt-1 text-3xl">
                        {{ totalCount }}
                     </main>
                  </div>
                  <div class="w-32" v-for="status in dashboardData?.statuses">
                     <main class="text-surface-400 font-light mb-2">
                        {{ status.name }}
                        <span
                           :class="colors[status.id]"
                           class="inline-block w-3 h-3 rounded-full ml-2"
                        ></span>
                     </main>
                     <main class="-mt-1 text-3xl">
                        {{ status.count }}
                     </main>
                  </div>
               </main>
            </template>
         </Card>

         <Card
            class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none! w-1/3"
         >
            <template #title>
               <div class="text-blue-400 font-light">Bo'limlar bo'yicha</div>
            </template>
            <template #content>
               <Chart type="bar" :data="organizationChart" :options="chartOptions" class="w-full" />
            </template>
         </Card>
      </main>

      <main class="flex gap-2 items-start mb-4">
         <Card
            class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none! w-1/2"
         >
            <template #title>
               <div class="text-blue-400 font-light">Oylar bo'yicha</div>
            </template>
            <template #content>
               <main class="flex gap-4">
                  <Chart type="bar" :data="monthChart" :options="chartOptions" class="w-full h-40" />
               </main>
            </template>
         </Card>
         <Card
            class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none! grow"
         >
            <template #title>
               <div class="text-blue-400 font-light">Qabul shakli bo'yicha</div>
            </template>
            <template #content>
               <main class="flex gap-4 justify-between">
                  <div class="w-32" v-for="status in dashboardData?.causes">
                     <main class="text-surface-400 font-light mb-2">
                        {{ status.name }}
                     </main>
                     <main class="-mt-1 text-3xl">
                        {{ status.count }}
                     </main>
                  </div>
               </main>
            </template>
         </Card>
      </main>
      <h3 class="px-2 mb-2 text-xl dark:text-surface-300">Ishga qabul qilingan xodimlar</h3>
      <main class="flex gap-2">
         <Card
            class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none! w-1/2"
         >
            <template #title>
               <div class="text-blue-400 font-light">Oylar bo'yicha</div>
            </template>
            <template #content>
               <main class="flex gap-4">
                  <Chart
                     type="bar"
                     :data="finishedMonth"
                     :options="chartOptions"
                     class="w-full h-full"
                  />
               </main>
            </template>
         </Card>
         <div class="grow flex flex-col gap-2">
            <Card
               class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none! grow"
            >
               <template #title>
                  <div class="text-blue-400 font-light">Qabul shakli bo'yicha</div>
               </template>
               <template #content>
                  <main class="flex gap-4 justify-between">
                     <div class="w-32">
                        <main class="text-surface-400 font-light mb-2">Umumiy</main>
                        <main class="-mt-1 text-3xl">
                           {{ totalCountFinished }}
                        </main>
                     </div>
                     <div class="w-32" v-for="status in dashboardData?.causes_finished">
                        <main class="text-surface-400 font-light mb-2">
                           {{ status.name }}
                        </main>
                        <main class="-mt-1 text-3xl">
                           {{ status.count }}
                        </main>
                     </div>
                  </main>
               </template>
            </Card>
            <Card
               class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none!"
            >
               <template #title>
                  <div class="text-blue-400 font-light">Kvota turlari bo'yicha</div>
               </template>
               <template #content>
                  <main class="flex gap-4 justify-between">
                     <div class="w-32">
                        <main class="text-surface-400 font-light mb-2">Umumiy</main>
                        <main class="-mt-1 text-3xl">
                           {{ totalCountKvot }}
                        </main>
                     </div>
                     <div class="w-32" v-for="status in dashboardData?.quot_type_finished">
                        <main class="text-surface-400 font-light mb-2">
                           {{ status.name }}
                        </main>
                        <main class="-mt-1 text-3xl">
                           {{ status.count }}
                        </main>
                     </div>
                  </main>
               </template>
            </Card>
         </div>
      </main>
   </section>
</template>

<script setup lang="ts">
import { setChartData, colors, chartOptions } from "@/configs/ChartConfig";
import { ref, onMounted, computed, nextTick } from "vue";
import { api } from "@/helpers/useFetch";
import moment from "moment";
import type { Ref } from "vue";
moment.locale("uz");
const organizationChart = ref();
const monthChart = ref();
const finishedMonth = ref();
const date = ref(new Date());

const dashboardData: Ref<any> = ref(null);
async function getDashboardInformation() {
   const { data } = await api.post("dashboard", { month: date.value });
   dashboardData.value = data;
}
const totalCount = computed(() => {
   return dashboardData.value?.statuses.reduce((accum, current) => (accum += current.count), 0);
});

const totalCountFinished = computed(() => {
   return dashboardData.value?.causes_finished.reduce((accum, current) => (accum += current.count), 0);
});

const totalCountKvot = computed(() => {
   return dashboardData.value?.quot_type_finished.reduce(
      (accum, current) => (accum += current.count),
      0
   );
});

onMounted(async () => {
   await getDashboardInformation();
   nextTick();

   organizationChart.value = setChartData(
      dashboardData.value.organizations.map((item) => item.shortname),
      dashboardData.value.organizations.map((item) => item.count)
   );
   monthChart.value = setChartData(
      dashboardData.value.month.map((item) => moment(item.month).format("MMM")),
      dashboardData.value.month.map((item) => item.count)
   );

   finishedMonth.value = setChartData(
      dashboardData.value.month_finished.map((item) => moment(item.month).format("MMM")),
      dashboardData.value.month_finished.map((item) => item.count),
      "orange"
   );
});
</script>
