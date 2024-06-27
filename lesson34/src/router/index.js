import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

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
        {
          path: "products",
          name: "admin-products",
          component: () => import("../views/admin/ProductView.vue"),
        },
        {
          path: "products/:id",
          name: "admin-one-products",
          component: () => import("../views/admin/OneProductView.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/AuthLayout.vue"),
      children: [
        {
          path: "/",
          name: "Login",
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
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  NProgress.start();
  const isAuthenticated = localStorage.getItem("user_token");

  if (!isAuthenticated && to.name !== "Login") {
    return { name: "Login" };
  } else {
    console.log(to, from);
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
