import { ref } from "vue";
import api from "../api";

export const useLogin = (payload) => {
  const error = ref(null);
  const userData = ref(null);
  const loading = ref(true);

  api
    .post("/auth/login", payload)
    .then((res) => {
      userData.value = res.data;
      localStorage.setItem("access_token", userData.value?.token);
      localStorage.setItem("refresh_token", userData.value?.refreshToken);
    })
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false));

  return { error, userData, loading };
};
