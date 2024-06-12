import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [
        {
          path: "home",
          name: "admin-home",
          component: () => import("../views/admin/HomeView.vue"),
        },
        {
          path: "about",
          name: "admin-about",
          component: () => import("../views/admin/AboutView.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/AuthLayout.vue"),
      children: [
        {
          path: "/",
          name: "admin-login",
          component: () => import("../views/auth/LoginView.vue"),
        },
        {
          path: "register",
          name: "admin-register",
          component: () => import("../views/auth/RegisterView.vue"),
        },
      ],
    },
  ],
});

export default router;
