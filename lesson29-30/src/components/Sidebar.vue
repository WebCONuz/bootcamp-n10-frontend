<script setup></script>

<template>
  <aside class="w-full min-h-full bg-[#F2EAE1] p-5 flex flex-col">
    <router-link
      to="/admin/home"
      class="py-2 block rounded-md bg-red-200 text-center mb-3"
      >Home Page</router-link
    >
    <router-link
      to="/admin/products"
      class="py-2 block rounded-md bg-red-200 text-center mb-3"
      >Products Page</router-link
    >
    <router-link
      to="/admin/about"
      class="py-2 block rounded-md bg-red-200 text-center mb-3"
      >About Page</router-link
    >
  </aside>
</template>

<style scoped></style>
