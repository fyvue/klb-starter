export default [
  {
    path: "/",
    name: "indexView",
    component: () => import("@/views/IndexView.vue"),
  },
  {
    name: "notFoundView",
    path: "/:path(.*)",
    component: () => import("@/views/NotFoundView.vue"),
  },
];
