<script setup lang="ts">
import { useServerRouter, useTranslation } from '@fy-/core'
import { ref } from 'vue'
import type { FyHeadLazy } from '@fy-/components'
import { useSeo } from '@fy-/components'

const routerServer = useServerRouter()
routerServer.status = 404
const translate = useTranslation()

useSeo(
  ref<FyHeadLazy>({
    title: translate('seo_404_title'),
  }),
)
</script>

<template>
  <div
    class="flex flex-col p-4 lg:p-6 xl:p-8 grow items-center justify-center relative"
  >
    <div class="absolute inset-x-0 min-h-[75vh] top-0 inset-shadow">
      <div class="inset-0 cover-grad-page absolute" />
    </div>
    <div
      class="lg:max-w-3xl relative"
    >
      <h1 class="text-2xl">
        {{ $t("404_page_title") }}
      </h1>
    </div>
  </div>
</template>
