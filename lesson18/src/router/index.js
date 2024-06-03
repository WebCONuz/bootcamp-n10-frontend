import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/About.vue"),
    },
    {
      path: "/products",
      name: "all-product",
      component: () => import("../pages/AllProducts.vue"),
    },
    {
      path: "/products/:id",
      name: "single-product",
      component: () => import("../pages/OneProduct.vue"),
    },
  ],
});

export default router;
