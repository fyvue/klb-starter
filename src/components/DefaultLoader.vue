<script setup lang="ts">
import { useEventBus } from '@fy-/core'
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    force?: boolean
    id?: string
  }>(),
  {
    force: false,
    id: '',
  },
)
const eventBus = useEventBus()
const loading = ref<boolean>(false)
function setLoading(value: boolean) {
  loading.value = value
}
onMounted(() => {
  if (props.id)
    eventBus.on(`${props.id}-loading`, setLoading)
  else
    eventBus.on('loading', setLoading)
})
onUnmounted(() => {
  if (props.id)
    eventBus.off(`${props.id}-loading`, setLoading)
  else
    eventBus.off('loading', setLoading)
})
</script>

<template>
  <div
    v-if="loading || force"
    class="flex-grow flex flex-col bg-fv-neutral-100/[.4] items-center justify-center absolute inset-0 z-50"
  >
    <div
      class="text-center pulse  w-72 h-72 p-14 rounded-full "
    >
      <div class="relative flex flex-col items-center">
        <div class="flex items-center justify-center flex-col">
          <img src="@/assets/logo.svg" class="h-28 relative">
        </div>
      </div>
    </div>
  </div>
</template>
