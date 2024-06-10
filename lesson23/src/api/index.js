import axios from "axios";

const intance = axios.create({
  baseURL: "https://dummyjson.com",
});

export default intance;
