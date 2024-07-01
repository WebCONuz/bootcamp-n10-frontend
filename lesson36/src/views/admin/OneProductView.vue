<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";
const route = useRoute();

const product = ref([]);

const getData = async () => {
  product.value = await axios.get(
    `https://dummyjson.com/products/${route.params.id}`
  );
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div>One Product: {{ route.params.id }}</div>
  <pre>{{ product }}</pre>
</template>

<style scoped></style>
