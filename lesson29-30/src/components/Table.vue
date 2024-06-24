<script setup>
const props = defineProps({
  data: Array,
  headers: Array,
});
</script>

<template>
  <table
    class="w-full table-auto border-t border-gray-200 shadow-md border-separate border-spacing-[6px]"
  >
    <thead>
      <tr>
        <th
          v-for="(item, index) in props.headers"
          :key="index"
          class="py-3 px-4 text-[#ACACAC] text-xs bg-[#F8F8F8] text-start"
        >
          {{ item.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.data" :key="item.id + 'saa'">
        <td
          class="py-3 px-4 bg-white"
          v-for="(td, i) in props.headers"
          :key="i"
        >
          <slot :name="`td_${td.value}`" :item="item">
            {{ item[td.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
