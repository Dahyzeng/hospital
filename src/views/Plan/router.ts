import { RouteConfig } from "vue-router";

export default {
  path: "/plan",
  name: "plan",
  meta: {
    title: "测试标题"
    // left/right 导航栏左右插槽
    // left: Test,
    // 不显示导航栏
    // header: false,
  },
  component: () => import("./index.vue")
} as RouteConfig;
