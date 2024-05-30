<script setup>
import { ref } from "vue";
const show = ref(false);
function showPassword() {
  show.value = !show.value;
  // this.show = !this.show
}
</script>

<template>
  <div class="container py-20">
    <div class="relative inline-block">
      <input
        :type="show ? 'text' : 'password'"
        class="py-2 pl-4 pr-11 outline-none border border-gray-300 focus:border-green-500 w-[500px] rounded-md text-xl"
      />
      <i
        v-if="!show"
        @click="showPassword"
        class="bx bx-low-vision text-2xl absolute top-1/2 -translate-y-1/2 right-3"
      ></i>
      <i
        v-else
        @click="showPassword"
        class="bx bx-show text-2xl absolute top-1/2 -translate-y-1/2 right-3"
      ></i>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
