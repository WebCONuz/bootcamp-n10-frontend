<script setup lang="ts">
import { ref, onMounted } from "vue";
import UseeCard from "../components/UseeCard.vue";

const myEmitFunction = (value: string): void => {
  console.log(value);
};
const users = ref<any>([]);
async function getUsers() {
  const userData = await fetch("https://dummyjson.com/users");
  const data = await userData.json();
  users.value = data.users;
}

onMounted(() => {
  getUsers();
});
</script>

<template>
  <div class="about container">
    <h1>This is an about page</h1>
    <div class="flex flex-wrap">
      <UseeCard
        v-for="item in users || []"
        :key="item.id"
        :data="item"
        title="Salom Card"
        @some-event="myEmitFunction"
      />
    </div>
  </div>
</template>

<style></style>
