<script setup></script>

<template>
  <header>
    <div class="container py-4 bg-gray-200 flex items-center justify-between">
      <span>Header</span>
      <div class="flex gap-x-8">
        <nuxt-link to="/">Home Page</nuxt-link>
        <nuxt-link to="/users">Users Page</nuxt-link>
        <nuxt-link to="/users/1">One user Page</nuxt-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
