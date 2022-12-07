<script setup>
import { Backend } from "@karpeleslab/i18next-klb-backend";
import {
  countriesPromise,
  i18nextPromise,
  useUserCheck,
  useFVStore,
  useSeo,
} from "@karpeleslab/fyvue";
import { computed, ref } from "vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";

const fvstore = useFVStore();
const isAuth = computed(() => fvstore.user);

if (!import.meta.env.SSR) {
  useUserCheck();
  await countriesPromise();
  /*
        await store.refreshCart(); if needed.
        if (isAuth.value) {
            Check subs or other checks
        }
    */
}

await i18nextPromise(Backend);

/*
Default Head 
useSeo(
  ref({
    name: "Website name",
    type: "website",
    image: "https://link-to-website-image/image.png",
    imageType: "image/png",
    imageWidth: "512",
    imageHeight: "512",
    title: "Website main title",
  }),
  true
);
*/
</script>

<template>
  <div class="website min-height">
    <LayoutHeader />
    <RouterView v-slot="{ Component }">
      <Suspense timeout="0">
        <main class="website__min-height" id="skip-nav">
          <component
            :is="Component"
            v-if="!$route.meta.reqLogin || ($route.meta.reqLogin && isAuth)"
          />
          <FyLoader id="main" />
        </main>
        <template #fallback>
          <FyLoader
            id="app-router-suspender"
            :force="true"
            :show-loading-text="false"
          />
        </template>
      </Suspense>
    </RouterView>
    <LayoutFooter />
  </div>
</template>
