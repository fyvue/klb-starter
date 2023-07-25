import { createApp as createRegularApp, createSSRApp } from 'vue'
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from 'vue-router'
import { getPrefix } from '@karpeleslab/klbfw'
import { createFyCore } from '@fy-/core'
import { createFyHead } from '@fy-/head'
import { createFyComponents } from '@fy-/components'
import { createPinia } from 'pinia'

import App from './AppSuspender.vue'
import routes from './routes'
import './style.scss'

export async function createApp(isSSR = false) {
  const pinia = createPinia()
  const head = createFyHead()
  const fycore = createFyCore()

  const app = isSSR ? createSSRApp(App) : createRegularApp(App)
  const router = createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory(getPrefix())
      : createWebHistory(getPrefix()),
    routes,
    scrollBehavior(to) {
      if (to.hash) {
        return {
          el: to.hash,
        }
      }
    },
  })
  router.afterEach((to) => {
    if (typeof window !== 'undefined' && !to.hash)
      window.scrollTo(0, 0)
  })
  app.use(router)
  app.use(fycore)
  app.use(head)
  app.use(pinia)
  const fyComponents = createFyComponents(undefined, 'KLB')
  app.use(fyComponents)

  return { app, router, head, pinia }
}
