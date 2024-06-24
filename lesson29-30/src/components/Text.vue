<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<template>
  <button
    @click="isShow = !isShow"
    class="py-2 px-4 outline-none border border-gray-500 rounded-md mt-4"
  >
    {{ isShow ? "Hide" : "Show" }}
  </button>
  <Transition name="text">
    <div v-if="isShow" class="p-4 rounded-lg bg-green-100 w-[500px] mt-4">
      <h2 class="text-2xl mb-3 font-semibold">Lorem ipsum dolor sit amet.</h2>
      <p class="text-lg font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, dicta
        voluptas accusantium, consequatur veniam accusamus deserunt cupiditate
        fugiat culpa at quidem, quod tempore possimus! Facilis nam libero
        accusamus voluptas at.
      </p>
    </div>
  </Transition>
  <Transition name="text2">
    <div v-if="isShow" class="p-4 rounded-lg bg-green-100 w-[500px] mt-4">
      <h2 class="text-2xl mb-3 font-semibold">Lorem ipsum dolor sit amet.</h2>
      <p class="text-lg font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, dicta
        voluptas accusantium, consequatur veniam accusamus deserunt cupiditate
        fugiat culpa at quidem, quod tempore possimus! Facilis nam libero
        accusamus voluptas at.
      </p>
    </div>
  </Transition>
</template>

<style>
.text-enter-active,
.text-leave-active {
  transition: opacity 0.1s ease;
}

.text-enter-from,
.text-leave-to {
  opacity: 0;
}

.text2-enter-active,
.text2-leave-active {
  transition: opacity 1s ease;
}

.text2-enter-from,
.text2-leave-to {
  opacity: 0;
}
</style>
