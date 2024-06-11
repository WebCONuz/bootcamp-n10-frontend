<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/user/home">Home</RouterLink>
        <RouterLink to="/user/about">About</RouterLink>
        <RouterLink to="/user/products">Products</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>Footer</footer>
</template>

<style scoped></style>
