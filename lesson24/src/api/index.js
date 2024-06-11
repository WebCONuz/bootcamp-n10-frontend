import axios from "axios";
import router from "../router";

const intance = axios.create({
  baseURL: "https://dummyjson.com",
});

axios.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
      // config.headers['Accept-Language'] = 'en';
      // config.headers["Accsess-Control-Allow-Origin"] = "*";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.message == "jwt expired" || error.status == 401) {
      // const err = new Error('Authorised')
      // return Promise.reject(err)
      router.push({ name: "login" });
    }
  }
);

export default intance;
