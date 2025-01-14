<template>
  <q-page>
    <div class="full-width q-mt-md">
      <top-bar />
      <q-separator class="full-width q-mt-sm" />
    </div>
    <div>
      <q-separator class="full-width q-mb-sm" />
      <botton-bar />
    </div>
  </q-page>
</template>
<script setup lang="ts">
defineOptions({
  name: "MainPage",
});

import TopBar from "components/TopBar/index.vue";
import BottonBar from "components/BottonBar/index.vue";
</script>

<style lang="scss" scoped>

</style>
