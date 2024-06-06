import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/user",
      component: () => import("../layouts/UserLayout.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../pages/users/Home.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("../pages/users/About.vue"),
        },
        {
          path: "products",
          name: "all-product",
          component: () => import("../pages/users/AllProducts.vue"),
        },
        {
          path: "products/:id",
          name: "single-product",
          component: () => import("../pages/users/OneProduct.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [
        {
          path: "main",
          name: "admin-home",
          component: () => import("../pages/admin/Main.vue"),
        },
        {
          path: "users",
          name: "admin-users",
          component: () => import("../pages/admin/Users.vue"),
        },
        {
          path: "settings",
          name: "admin-settings",
          component: () => import("../pages/admin/Settings.vue"),
        },
        {
          path: "category",
          name: "admin-category",
          component: () => import("../pages/admin/Category.vue"),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
