<script setup>
import { ref } from "vue";
import { account, client } from "../../api/appwrite.js";

const isAuth = ref(null);
const user = ref(null);

const login = async () => {
  // isAuth.value = auth0.isAuthenticated;
  // user.value = auth0.user;

  account.createOAuth2Session(
    "google",
    "http://localhost:5173",
    "http://localhost:5173/admin"
  );
  console.log(account, client);
};

const logout = () => {
  // auth0.logout({
  //   logoutParams: {
  //     returnTo: window.location.origin,
  //   },
  // });
  console.log(account, client);
};
</script>

<template>
  <div class="text-center text-2xl text-red-500 my-10">Login Page</div>
  <div class="text-center">
    <!-- <router-link
      to="/admin/home"
      class="py-2 px-5 rounded-md border border-green-500 text-green-500"
    >
      Admin Home Page
    </router-link> -->
    <button
      class="py-2 px-5 rounded-md border border-green-500 text-green-500"
      @click="login"
    >
      Auth With Google
    </button>
    <button
      class="py-2 px-5 rounded-md border border-green-500 text-green-500"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<style scoped></style>
