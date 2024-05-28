<script setup>
import { ref } from "vue";
import Intro from "./Intro.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const modules = ref([Pagination, Autoplay, Navigation]);
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
    <swiper-slide><Intro /></swiper-slide>
  </swiper>
</template>

<style>
.swiper-pagination-bullet {
}
.swiper-button-prev {
}
.swiper-button-next {
}
</style>
