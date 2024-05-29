<script setup>
import Header from "../components/Header.vue";
import Intro from "../components/Intro.vue";
import Sidebar from "../components/Siderbar.vue";
import Grid from "../components/Grid.vue";
import Carousel from "../components/Carousel.vue";
import Login from "../components/Login.vue";
import Dropdown from "../components/Dropdown.vue";
</script>

<template>
  <Header />
  <Intro />
  <main class="my-10">
    <div class="container flex">
      <Sidebar class="w-1/4" />
      <Grid class="w-3/4" />
    </div>
    <Login />
    <Carousel class="border border-red-500" />
  </main>
</template>
