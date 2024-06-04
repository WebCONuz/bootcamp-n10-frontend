<script setup></script>

<template>
  <main class="flex">
    <aside
      class="p-4 w-1/5 h-screen overflow-y-auto bg-gray-100 border-r border-gray-300 flex flex-col gap-y-2"
    >
      <router-link
        to="/admin/main"
        class="bg-green-400 text-white py-2 text-center block rounded-md"
      >
        Home
      </router-link>
      <router-link
        to="/admin/settings"
        class="bg-green-400 text-white py-2 text-center block rounded-md"
      >
        Settings
      </router-link>
      <router-link
        to="/admin/users"
        class="bg-green-400 text-white py-2 text-center block rounded-md"
      >
        Users
      </router-link>
      <router-link
        to="/admin/category"
        class="bg-green-400 text-white py-2 text-center block rounded-md"
      >
        Category
      </router-link>
    </aside>
    <section class="w-4/5 bg-white p-4 h-screen overflow-y-auto">
      <RouterView />
    </section>
  </main>
</template>

<style scoped></style>
