<script setup>
import ETable from "../../components/ETable.vue";
import axios from "axios";
import { ref } from "vue";

const searchValue = ref("");
const allProducts = ref("");

const getAllProducts = async () => {
  try {
    const products = await axios.get(`https://dummyjson.com/products`);
    allProducts.value = products.data.products;
  } catch (error) {
    console.log(error);
  }
};

getAllProducts();
</script>

<template>
  <h1 class="text-2xl font-bold capitalize mb-5">Products List</h1>

  <ETable :data="allProducts" />
</template>

<style scoped></style>
