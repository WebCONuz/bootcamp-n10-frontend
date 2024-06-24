<script setup>
import { ref } from "vue";
import { useQuizStore } from "../stores/quizz.js";
const quizzStore = useQuizStore();
</script>

<template>
  <main>
    <section class="container">
      <h1>This is an Home page {{ $t("title") }}</h1>
      <select name="" id="" v-model="$i18n.locale">
        <option value="uz">uz</option>
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>

      <router-link to="/about">Create question</router-link>

      <pre>{{ quizzStore.question }}</pre>
    </section>
  </main>
</template>

<style></style>
