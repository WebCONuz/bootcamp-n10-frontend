<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="card p-3 bg-white shadow-lg rounded-md">
    <img
      :src="props.data?.image"
      alt="image"
      class="w-full h-[150px] object-cover rounded mb-2"
    />
    <h2 class="text-xl">Card title: {{ props.data?.title }}</h2>
    <p class="text-sm font-bold">Price: {{ props.data?.price }}</p>
  </div>
</template>

<style scoped></style>
