import { createApp as createRegularApp, createSSRApp } from "vue";
import { createFyvue } from "@karpeleslab/fyvue";
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import { getPrefix } from "@karpeleslab/klbfw";
import { createFyHead } from "@fy-/head";
import { createPinia } from "pinia";

import App from "./AppSuspender.vue";
import routes from "./routes";
import "./global.scss";

export const createApp = async (isSSR = false) => {
  const pinia = createPinia();
  const head = createFyHead();
  const fyvue = createFyvue();
  const app = isSSR ? createSSRApp(App) : createRegularApp(App);
  const router = createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory(getPrefix())
      : createWebHistory(getPrefix()),
    routes,
  });
  app.use(router);
  app.use(head);
  app.use(pinia);
  app.use(fyvue);
  return { app, router, head, pinia };
};
