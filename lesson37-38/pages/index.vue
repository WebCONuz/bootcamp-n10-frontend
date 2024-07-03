<script setup>
useHead({
  title: "Main page",
  link: {
    href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    rel: "stylesheet",
  },
});

const products = ref(null);
const loading = ref(false);
const getProducts = async () => {
  loading.value = true;
  const { data, pending, error, refresh } = await useFetch(
    "https://6684ca5456e7503d1ae129ca.mockapi.io/api/v1/products"
  );
  // console.log(data._rawValue);
  products.value = data._rawValue;
  loading.value = false;
};
</script>

<template>
  <div class="container">
    <h1>Main Page</h1>
    <i class="bx bxs-balloon text-4xl text-green-500"></i>

    <div class="text-center py-4">
      <button
        class="py-3 px-5 rounded-md bg-green-600 text-white"
        @click="getProducts"
      >
        Get Products
      </button>
    </div>
    <div class="loading" v-if="loading">Loading ...</div>
    <!-- <pre>{{ products }}</pre> -->

    <div class="grid grid-cols-4 gap-4">
      <ProductCard v-for="item in products" :key="item?.id" :data="item" />
    </div>
  </div>
</template>

<style scoped></style>
