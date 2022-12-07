<script setup lang="ts">
import { useHistory, useTranslation, useSeo } from "@karpeleslab/fyvue";
import { ref } from "vue";

const translate = useTranslation();
const routerServer = useHistory();
routerServer.status = 404;
useSeo(ref({ title: translate("seo_title_404") }));
</script>
<template>
  <DefaultError404 />
</template>
