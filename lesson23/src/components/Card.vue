<template>
  <div class="card bg-white shadow-lg rounded-md p-4">
    <router-link :to="'/products/' + props.data?.id" class="w-full">
      <img
        :src="props.data?.images[0]"
        alt="flover"
        class="w-full h-[200px] object-cover"
      />
    </router-link>
    <p class="font-semibold text-center mt-4 mb-2 text-xl line-clamp-1">
      {{ props.data.title }}
    </p>
    <p class="text-sm font-semibold text-red-500 text-center">
      ${{ props.data.price }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped></style>
