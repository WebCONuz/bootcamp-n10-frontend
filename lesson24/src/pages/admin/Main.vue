<script setup>
import api from "../../api";
import { ref } from "vue";
import Card from "../../components/Card.vue";

let products = ref([]);
let loading = ref(true);

async function getData() {
  const resData = await api.get("/products", { params: { limit: 15 } });
  products.value = resData.data.products;
  loading.value = false;
}

getData();
</script>

<template>
  <div v-if="loading">LOADER ...</div>
  <section v-else class="grid grid-cols-4 gap-4">
    <Card v-for="item in products" :key="item.id" :data="item" />
  </section>
</template>

<style scoped></style>
