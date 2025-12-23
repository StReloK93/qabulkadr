export function setChartData(names, counts, color = "#00a1ff") {
   return {
      labels: names,
      datasets: [
         {
            label: "Sales",
            data: counts,
            borderRadius: {
               topLeft: 12,
               topRight: 12,
               bottomLeft: 0,
               bottomRight: 0,
            },
            borderSkipped: false,
            backgroundColor: color,
            borderColor: "transparent",
            borderWidth: 0.1,
            barPercentage: 0.5, // bar kengligi
            categoryPercentage: 1, // barlar orasidagi masofa
         },
      ],
   };
}

export const colors = {
   1: "bg-green-400",
   2: "bg-blue-400",
   3: "bg-orange-400",
};

export const chartOptions = {
   responsive: true,
   maintainAspectRatio: false,
   scales: {
      x: { display: true },
      y: { display: true },
   },
   plugins: {
      legend: { display: false },
      datalabels: {
         anchor: "end",
         align: "top",
         color: "#000",
         font: {
            weight: "bold",
         },
         formatter: function (value) {
            return value;
         },
      },
   },
};
