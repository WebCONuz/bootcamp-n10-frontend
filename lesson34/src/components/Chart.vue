<script setup>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";

const chartElement = ref(null);
onMounted(() => {
  new Chart(chartElement.value, {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          hoverOffset: 2,
        },
      ],
    },
  });
});
</script>

<template>
  <canvas ref="chartElement" class="w-full"></canvas>
</template>

<style scoped></style>
