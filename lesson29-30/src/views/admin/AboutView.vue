<script setup>
import { ref } from "vue";
import Chart from "../../components/Chart.vue";
import Text from "../../components/Text.vue";
import AppTransition from "../../components/AppTransition.vue";

const showChart = ref(true);
</script>

<template>
  <div>About page</div>
  <div class="flex items-start w-1/3 p-4 bg-white shadow-lg rounded-md">
    <div class="w-1/2">
      <h2 class="text-lg font-semibold" @click="showChart = !showChart">
        Lorem ipsum lodor dsad asd as
      </h2>
    </div>
    <div class="w-1/2">
      <AppTransition>
        <Chart v-if="showChart" />
      </AppTransition>
    </div>
  </div>
  <Text />
</template>

<style scoped></style>
