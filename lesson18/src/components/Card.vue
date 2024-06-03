<template>
  <div class="card">
    <router-link :to="'/products/' + props.data.id">
      <img :src="props.data.img" alt="flover" class="w-[150px]" />
    </router-link>
    <p>{{ props.data.title }}</p>
    <p>{{ props.data.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped></style>
