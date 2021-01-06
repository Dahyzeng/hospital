import { RouteConfig } from "vue-router";

export default {
  path: "",
  redirect: "/plan",
  component: () => import("./layout"),
  children: [
    {
      path: '/plan',
      component: () => import("@/views/Plan/index.vue"),
    }
  ]
} as RouteConfig;
