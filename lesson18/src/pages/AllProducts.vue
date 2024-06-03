<template>
  <div class="flex border border-red-500">
    <Card v-for="(item, index) in Products" :key="index" :data="item" />
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import { Products } from "../data/products.js";
</script>

<style lang="scss" scoped></style>
