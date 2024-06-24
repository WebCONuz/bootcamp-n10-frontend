<script setup></script>

<template>
  <Transition name="element">
    <slot />
  </Transition>
</template>

<style scoped>
.element-enter-active,
.element-leave-active {
  transition: opacity 0.5s ease;
}

.element-enter-from,
.element-leave-to {
  opacity: 0;
}
</style>
