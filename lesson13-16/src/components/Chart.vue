<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const mockData = ref([
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
]);

onMounted(() => {
  new Chart(document.getElementById("acquisitions"), {
    type: "pie",
    data: {
      labels: mockData.value.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: mockData.value.map((row) => row.count),
        },
      ],
    },
  });
});
</script>

<template>
  <div class="w-[500px]">
    <canvas id="acquisitions"></canvas>
  </div>
</template>

<style scoped></style>
