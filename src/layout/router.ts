import { RouteConfig } from "vue-router";
import planRouter from "@/views/Plan/router";

export default {
  path: "",
  redirect: "/plan",
  component: () => import("./layout"),
  children: [planRouter]
} as RouteConfig;
