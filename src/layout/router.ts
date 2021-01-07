import { RouteConfig } from "vue-router";

export default {
  path: "",
  redirect: "/plan",
  component: () => import("./layout"),
  children: [
    {
      path: "/plan",
      name: "name",
      meta: {
        title: "用药计划",
        // left/right 导航栏左右插槽
        // left: Test,
        // 不显示导航栏
        // header: false,
      },
      component: () => import("@/views/Plan/index.vue"),
    },
    {
      path: "/psq",
      meta: {
        title: "配置用药反应症状问卷",
      },
      component: () => import("@/views/PSQ/index.vue"),
    },
    {
      path: "/feedback",
      meta: {
        title: "自述反馈",
      },
      component: () => import("@/views/Feedback/index.vue"),
    },
    {
      path: "/patient-info",
      meta: {
        title: "患者信息",
      },
      component: () => import("@/views/PatientInfo/index.vue"),
    },
    {
      path: "/medical_records",
      meta: {
        title: "病例档案",
      },
      component: () => import("@/views/MedicalRecords/index.vue"),
    },
  ],
} as RouteConfig;
