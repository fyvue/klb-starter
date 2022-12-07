<script setup>
import { useTranslation } from "@karpeleslab/fyvue";
const translate = useTranslation();
const navLinks = [
  { name: translate("nav_home"), to: "/" },
  { name: translate("nav_contact"), to: "/contact" },
];
</script>
<template>
  <FyNavbar
    :links="navLinks"
    :showTitle="true"
    :showCart="false"
    :title="$t('website')"
  >
    <template v-slot:logo>
      <img src="@/assets/images/logo.svg" class="h-10" />
    </template>
  </FyNavbar>
</template>
