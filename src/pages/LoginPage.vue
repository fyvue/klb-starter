<script lang="ts" setup>
import type { FyHeadLazy } from '@fy-/components'
import { KlbUserFlow, useSeo } from '@fy-/components'
import { ref } from 'vue'
import { useTranslation } from '@fy-/core'
import DefaultLoader from '@/components/DefaultLoader.vue'

const translate = useTranslation()
useSeo(
  ref<FyHeadLazy>({
    title: translate('login_title_seo'),
    description: translate('login_desc_seo'),
    name: translate('website_name'),
  }),
)
</script>

<template>
  <DefaultLoader id="klblogin" />
  <div
    class="flex flex-grow flex-col justify-center w-full px-1 lg:max-w-6xl mx-auto"
  >
    <div class="bg-fv-neutral-950 mt-8 rounded-xl p-4 mx-auto w-full">
      <KlbUserFlow
        return-default="/dashboard"
        :force-action="
          $route.query.act ? $route.query.act.toString() : undefined
        "
      />
    </div>
  </div>
</template>
