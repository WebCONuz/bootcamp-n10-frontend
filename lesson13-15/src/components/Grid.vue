<template>
  <section class="flex flex-wrap">
    <Card v-for="(item, index) in backendData" :key="item.id" :data="item" />
  </section>
</template>

<script setup>
import Card from "./Card.vue";
import ProductImg1 from "/images/flower1.png";

const backendData = [
  {
    id: 1,
    imgUrl: ProductImg1,
    text: "Barberton Daisy",
    price: "$119.00",
  },
  {
    id: 1,
    imgUrl: ProductImg1,
    text: "Barberton Daisy",
    price: "$119.00",
  },
  {
    id: 1,
    imgUrl: ProductImg1,
    text: "Barberton Daisy",
    price: "$119.00",
  },
  {
    id: 1,
    imgUrl: ProductImg1,
    text: "Barberton Daisy",
    price: "$119.00",
  },
  {
    id: 1,
    imgUrl: ProductImg1,
    text: "Barberton Daisy",
    price: "$119.00",
  },
];
</script>

<style scoped></style>
