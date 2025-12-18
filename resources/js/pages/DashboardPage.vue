<template>
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

   <Card class="w-90 dark:bg-surface-950!">
      <template #title>Simple Card</template>
      <template #content>
         <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full" />
      </template>
   </Card>
</template>

<script setup>
import { api } from "@/helpers/useFetch";
import { ref, onMounted } from "vue";

const chartData = ref();
const chartOptions = ref();
const date = ref(new Date());
const setChartData = () => {
   return {
      labels: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"],
      datasets: [
         {
            label: "Sales",
            data: [540, 325, 702, 620],
            backgroundColor: "#4f46e5",
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

async function getDashboardInformation() {
   await api.post("dashboard", { month: date.value });
}

onMounted(async () => {
   await getDashboardInformation();
   chartData.value = setChartData();
   chartOptions.value = setChartOptions();
});
</script>
