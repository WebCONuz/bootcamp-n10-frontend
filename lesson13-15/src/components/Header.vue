<script setup>
import { ref } from "vue";
import Dropdown from "../components/Dropdown.vue";

const isShowMenu = ref(false);
const changeShow = () => {
  isShowMenu.value = !isShowMenu.value;
  // this.isShowMenu = this.isShowMenu;
};
</script>

<template>
  <header class="">
    <div class="container flex justify-between items-center">
      <a href="#">
        <img src="/images/Logo.png" alt="logo" />
      </a>
      <nav class="flex gap-x-10">
        <div class="relative">
          <div
            @click="changeShow"
            class="flex items-center border-b-[3px] border-transparent hover:border-[#46A358]"
          >
            <a
              href="#"
              class="duration-200 h-[70px] flex items-center font-bold"
              >Home</a
            >
            <i
              class="bx bx-chevron-down text-lg ml-1 duration-200"
              :class="isShowMenu ? 'rotate-180' : 'rotate-0'"
            ></i>
          </div>
          <Dropdown
            :class="isShowMenu ? 'opacity-100 visible' : 'opacity-0 invisible'"
          />
        </div>
        <a
          href="#"
          class="font-bold border-b-[3px] border-transparent hover:border-[#46A358] duration-200 h-[70px] flex items-center"
          >Shop</a
        >
        <a
          href="#"
          class="font-bold border-b-[3px] border-transparent hover:border-[#46A358] duration-200 h-[70px] flex items-center"
          >Plant Care</a
        >
        <a
          href="#"
          class="font-bold border-b-[3px] border-transparent hover:border-[#46A358] duration-200 h-[70px] flex items-center"
          >Blogs</a
        >
      </nav>
      <div class="flex items-center gap-x-4">
        <i class="bx bx-search text-2xl"></i>
        <i class="bx bx-cart-alt text-2xl"></i>
        <button
          class="bg-[#46A358] flex items-center px-4 py-1 rounded-md text-white"
        >
          <i class="bx bx-log-in text-xl mr-2"></i>
          <span>Login</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
