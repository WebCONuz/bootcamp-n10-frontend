<script setup lang="ts">
import { userCard } from "../types/user";

const props = defineProps<userCard>();

const emit = defineEmits(["someEvent"]);

const handleChange = () => {
  emit("someEvent", `Hello from ${props.data.firstName}`);
};
</script>

<template>
  <div class="user-card m-[10px] shadow-lg bg-white rounded-md p-4">
    <!-- <pre>{{ props }}</pre> -->
    <h2>{{ props.title }}</h2>
    <p>{{ props.data.firstName }}</p>
    <p>{{ props.data.email }}</p>
    <p>{{ props.data.phone }}</p>

    <button @click="handleChange">Click ME</button>
  </div>
</template>

<style scoped>
.user-card {
  width: calc(100% / 4 - 20px);
}
</style>
