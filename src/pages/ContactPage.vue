<script lang="ts" setup>
import type { FyHeadLazy } from '@fy-/components'
import { KlbContact, useSeo } from '@fy-/components'
import { ref } from 'vue'
import { useTranslation } from '@fy-/core'

const translate = useTranslation()
useSeo(
  ref<FyHeadLazy>({
    title: translate('contact_title_seo'),
    description: translate('contact_desc_seo'),
    name: translate('website_name'),
  }),
)
</script>

<template>
  <div
    class="flex flex-grow flex-col justify-center w-full px-1 lg:max-w-6xl mx-auto"
  >
    <div class="bg-fv-neutral-950 mt-8 rounded-xl p-4 mx-auto w-full">
      <KlbContact to="@contact" />
    </div>
  </div>
</template>
