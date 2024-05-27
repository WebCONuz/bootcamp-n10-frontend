<script setup></script>

<template>
  <header class="">
    <div class="container flex justify-between items-center">
      <a href="#">
        <img src="/images/Logo.png" alt="logo" />
      </a>
      <nav class="flex gap-x-10">
        <a
          href="#"
          class="hover:font-bold border-b-[3px] border-transparent hover:border-[#46A358] duration-200 h-[70px] flex items-center"
          >Home</a
        >
        <a
          href="#"
          class="hover:font-bold border-b-[3px] border-transparent hover:border-[#46A358] duration-200 h-[70px] flex items-center"
          >Shop</a
        >
        <a
          href="#"
          class="hover:font-bold border-b-[3px] border-transparent hover:border-[#46A358] duration-200 h-[70px] flex items-center"
          >Plant Care</a
        >
        <a
          href="#"
          class="hover:font-bold border-b-[3px] border-transparent hover:border-[#46A358] duration-200 h-[70px] flex items-center"
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
