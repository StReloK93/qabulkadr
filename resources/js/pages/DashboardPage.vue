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
               iconDisplay="input"
               :showIcon="true"
            />
         </div>
      </main>
      <main class="flex gap-5 mb-4">
         <Card
            class="border border-surface-200 dark:border-surface-800 dark:bg-surface-950! shadow-none!"
         >
            <template #title>
               <div class="text-surface-400 font-light">Jarayondagi Xodimlar</div>
            </template>
            <template #content>
               <main class="flex gap-4">
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
                        {{ status.employes_count }}
                     </main>
                  </div>
               </main>
            </template>
         </Card>
      </main>
   </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { api } from "@/helpers/useFetch";
import type { Ref } from "vue";

const chartData = ref();
const chartOptions = ref();
const date = ref(new Date());

const dashboardData: Ref<any> = ref(null);
async function getDashboardInformation() {
   const { data } = await api.post("dashboard", { month: date.value });
   dashboardData.value = data;
}
const totalCount = computed(() => {
   return dashboardData.value?.statuses.reduce((accum, current) => (accum += current.employes_count), 0);
});

const colors = {
   1: "bg-green-400",
   2: "bg-blue-400",
   3: "bg-orange-400",
};

onMounted(async () => {
   await getDashboardInformation();
   chartData.value = setChartData();
   chartOptions.value = setChartOptions();
});

const setChartData = () => {
   return {
      labels: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"],
      datasets: [
         {
            label: "Sales",
            data: [540, 325, 702, 620],
            borderRadius: {
               topLeft: 12,
               topRight: 12,
               bottomLeft: 0,
               bottomRight: 0,
            },
            borderSkipped: false,
            backgroundColor: "#00a1ff",
            borderColor: "transparent",
            borderWidth: 1,
         },
      ],
   };
};
const setChartOptions = () => {
   return {
      responsive: true,
      scales: {
         x: { display: true },
         y: { display: false },
      },
      plugins: {
         legend: { display: false },
      },
   };
};
</script>
