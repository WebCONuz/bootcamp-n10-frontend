<script setup>
import Table from "../../components/Table.vue";
import axios from "axios";
import { ref } from "vue";
import { userHeaders } from "../../data/users.js";

const allUsers = ref("");

const searchData = async () => {
  try {
    const users = await axios.get(`https://dummyjson.com/users`);
    console.log(users);
    allUsers.value = users.data.users;
  } catch (error) {
    console.log(error);
  }
};

searchData();
</script>

<template>
  <h1 class="text-2xl font-bold capitalize mb-5">Users List</h1>

  <div class="flex mb-4">
    <input
      v-model="searchValue"
      type="text"
      class="w-1/2 py-2 px-4 rounded-md border border-gray-300 outline-none"
      @input="searchData"
    />
  </div>

  <Table :data="allUsers" :headers="userHeaders">
    <template #td_fullName="{ item }">
      {{ item?.firstName }} {{ item?.lastName }}
    </template>
    <template #td_address="{ item }">
      {{ item?.address?.city }} {{ item?.address?.address }}
    </template>
    <template #td_company="{ item }">
      {{ item?.company?.department }} {{ item?.company?.name }}
    </template>
    <template #td_image="{ item }">
      <img :src="item?.image" alt="avater" class="w-10 h-10 rounded-full" />
    </template>
  </Table>
</template>

<style scoped></style>
