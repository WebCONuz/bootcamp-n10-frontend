<template>
  <div class="card m-[10px] group">
    <div class="pt-8 pb-5 px-2 bg-gray-50 relative">
      <img :src="props.data.imgUrl" class="w-full" />
      <div
        class="opacity-0 group-hover:opacity-100 invisible group-hover:visible absolute top-0 left-0 w-full h-full border-t border-[#46A358] flex items-end justify-center pb-3 duration-200"
      >
        <ul class="flex gap-x-2">
          <li
            class="flex items-center justify-center bg-white w-9 h-9 rounded-md"
          >
            <i class="bx bx-cart-alt text-2xl"></i>
          </li>
          <li
            class="flex items-center justify-center bg-white w-9 h-9 rounded-md"
          >
            <i class="bx bx-heart text-2xl"></i>
          </li>
          <li
            class="flex items-center justify-center bg-white w-9 h-9 rounded-md"
          >
            <i class="bx bx-search text-2xl"></i>
          </li>
        </ul>
      </div>
    </div>
    <p class="mt-3 mb-1 text-[#3D3D3D]">{{ props.data.text }}</p>
    <p class="font-bold text-[#46A358] text-lg">{{ props.data.price }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    required: true,
    type: Object,
  },
});
</script>

<style scoped>
.card {
  width: calc(100% / 3 - 20px);
}
</style>
