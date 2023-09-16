import { createRouter, createWebHistory } from "vue-router";

const routes: any = [
  {
    path: "/",
    component: () => import("@/pages/boards.vue"),
  },
  {
    path: "/example",
    component: () => import("@/pages/example/index.vue"),
    redirect: "/example/a",
    children: [
      {
        path: "a",
        component: () => import("@/pages/example/example-a.vue"),
      },
      {
        path: "b",
        component: () => import("@/pages/example/example-b.vue"),
      },
    ],
    // redirect: '/trans'
  },
  {
    path: "/trans",
    component: () => import("@/components/trans.vue"),
  },
  {
    path: "/create",
    component: () => import("@/pages/create.vue"),
  },
  {
    path: "/details",
    component: () => import("@/pages/details.vue"),
  },
  {
    path: "/progress",
    component: () => import("@/pages/progress.vue"),
  },
  {
    path: "/profil",
    component: () => import("@/pages/profil.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
