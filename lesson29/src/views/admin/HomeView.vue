<script setup>
import Table from "../../components/Table.vue";
import axios from "axios";
import { ref } from "vue";

const searchValue = ref("");
const allProducts = ref("");

const searchData = async () => {
  try {
    const products = await axios.get(
      `https://dummyjson.com/products/search?q=${searchValue.value}`
    );
    allProducts.value = products.data.products;
  } catch (error) {
    console.log(error);
  }
};

searchData();
</script>

<template>
  <h1 class="text-2xl font-bold capitalize mb-5">Students List</h1>

  <div class="flex mb-4">
    <input
      v-model="searchValue"
      type="text"
      class="w-1/2 py-2 px-4 rounded-md border border-gray-300 outline-none"
      @input="searchData"
    />
  </div>

  <Table :data="allProducts" :getAll="searchData" />
</template>

<style scoped></style>
