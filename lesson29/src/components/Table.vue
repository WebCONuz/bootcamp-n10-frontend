<script setup>
import axios from "axios";
import { ref } from "vue";

const props = defineProps({
  data: Array,
  getAll: Function,
});

const deleteProduct = async (id) => {
  try {
    const mgs = confirm("Deleted?");
    if (mgs) {
      const deletedData = await axios.delete(
        `https://dummyjson.com/products/${id}`
      );
      console.log(deletedData.data);

      props.getAll();
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <table
    class="w-full table-auto border-t border-gray-200 shadow-md border-separate border-spacing-[6px]"
  >
    <thead>
      <tr>
        <th class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start">
          ID
        </th>
        <th class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start">
          Name
        </th>
        <th class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start">
          Email
        </th>
        <th class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start">
          Phone
        </th>
        <th class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start">
          Enroll Number
        </th>
        <th class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start">
          Date of admission
        </th>
        <th class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.data" :key="item.id + 'saa'">
        <td class="py-3 px-4 bg-white text-sm">{{ item?.id }}</td>
        <td class="py-3 px-4 bg-white text-sm">{{ item?.title }}</td>
        <td class="py-3 px-4 bg-white text-sm">{{ item?.category }}</td>
        <td class="py-3 px-4 bg-white text-sm">+998991021354</td>
        <td class="py-3 px-4 bg-white text-sm">{{ item?.price }}</td>
        <td class="py-3 px-4 bg-white text-sm">{{ item?.rating }}</td>
        <td class="py-3 px-4 bg-white">
          <div class="flex text-[#FEAF00] gap-x-4">
            <i class="bx bx-pencil"></i>
            <i class="bx bx-trash-alt" @click="deleteProduct(item.id)"></i>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
