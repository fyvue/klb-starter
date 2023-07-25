<script setup>
import { Backend } from '@karpeleslab/i18next-klb-backend'

import {
  KlbUseStore,
  KlbUseUserCheck,
  KlbcountriesPromise,
  useSeo,
} from '@fy-/components'
import { computed, ref } from 'vue'
import { i18nextPromise, useTranslation } from '@fy-/core'
import DefaultLoader from '@/components/DefaultLoader.vue'

const klbStore = KlbUseStore()
const isAuth = computed(() => klbStore.isAuth)
const translate = useTranslation()
const date = '__DATE__'
if (!import.meta.env.SSR) {
  KlbUseUserCheck('/login', true)
  await KlbcountriesPromise()
}
await i18nextPromise(Backend)
const navLinks = [
  { name: translate('nav_home'), to: '/' },
  { name: translate('nav_login'), to: '/login' },
  { name: translate('nav_contact'), to: '/contact' },
]
useSeo(
  ref({
    name: translate('website_name'),
    type: 'website',
    title: translate('website_title'),
  }),
  true,
)
</script>

<template>
  <div class="min-h-[100vh] flex flex-col">
    <div
      class="bg-fv-neutral-950"
    >
      <div class="container mx-auto px-2 md:px-4 xl:px-6 flex justify-between items-center py-2 ">
        <RouterLink to="/" class="inline-flex gap-2 items-center text-xl text-white">
          <img src="@/assets/logo.svg" class="h-10 w-10">
          {{ $t('website_name') }}
        </RouterLink>
        <ul class="flex-1 inline-flex gap-4 items-center justify-end">
          <li v-for="link, idx in navLinks" :key="`l${idx}`">
            <RouterLink :to="link.to" class="btn link">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <RouterView v-slot="{ Component }">
      <Suspense timeout="0">
        <main id="skip-nav" class="flex-1">
          <DefaultLoader
            id="main"
            :force="false"
            :show-loading-text="false"
          />
          <component
            :is="Component"
            v-if="!$route.meta.reqLogin || ($route.meta.reqLogin && isAuth)"
          />
          <FyLoader id="main" />
        </main>
        <template #fallback>
          <DefaultLoader
            id="app-router-suspender"
            :force="true"
            :show-loading-text="false"
          />
        </template>
      </Suspense>
    </RouterView>
    <footer class="bg-fv-neutral-950 py-4 text-center text-fv-neutral-400">
      <p>
        &copy; {{ $t('website_name') }} 2022 - <small class="text-xs">(build date: {{ date }})</small>
      </p>
    </footer>
  </div>
</template>
