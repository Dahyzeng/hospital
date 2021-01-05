import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import layoutRouter from "@/layout/router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  layoutRouter,
  {
    path: "*",
    component: () => import("./views/Errors/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
