import { RouteConfig } from "vue-router";

export default {
  path: "",
  redirect: "/plan",
  component: () => import("./layout"),
  children: [
    {
      path: '/plan',
      name: 'name',
      meta: {
        title: "用药计划"
        // left/right 导航栏左右插槽
        // left: Test,
        // 不显示导航栏
        // header: false,
      },
      component: () => import("@/views/Plan/index.vue"),
    },
    {
      path: '/psq',
      meta: {
        title: "配置用药反应症状问卷"
      },
      component: () => import("@/views/PSQ/index.vue"),
    }
  ]
} as RouteConfig;
