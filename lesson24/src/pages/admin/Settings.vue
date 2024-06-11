<script setup>
import { useLogin } from "../../composables/useLogin.js";

const { error, userData, loading } = useLogin({
  username: "emilys",
  password: "emilyspass",
});
</script>

<template>
  <div>Settings page</div>
  <div v-if="loading">LOADING...</div>
  <pre>{{ userData }}</pre>
</template>

<style scoped></style>
