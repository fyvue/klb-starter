<script setup lang="ts">
import App from './App.vue'
import DefaultLoader from './components/DefaultLoader.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <App />
    </template>
    <template #fallback>
      <DefaultLoader id="app-suspender" :force="true" />
    </template>
  </Suspense>
</template>
