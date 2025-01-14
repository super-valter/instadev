<template>
  <div>
    <div class="q-pt-md">
      <top-bar />
      <q-separator class="full-width q-mt-sm" />
    </div>

    <div class="q-mt-md">
      <stories-update />
      <q-separator class="full-width q-mb-sm" />
    </div>

    <div class="container-bottom absolute-bottom q-pb-md">
      <q-separator class="full-width q-mb-sm" />
      <botton-bar />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MainPage",
});

import TopBar from "components/TopBar/index.vue";
import StoriesUpdate from "components/StoriesUpdate/index.vue";
import BottonBar from "components/BottomBar/index.vue";

</script>

<style lang="scss" scoped>
.container-bottom{
  background-color: #FAFAFA;
}
</style>

