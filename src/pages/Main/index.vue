<template>
  <div>
    <div class="q-pt-md fixed-top z-max bg-white">
      <top-bar />
      <q-separator class="full-width q-mt-sm" />
    </div>

    <div style="margin-top: 80px;">
      <stories-update />
      <q-separator class="full-width q-mb-sm" />
    </div>
    <div v-for="i in 10" :key="i" class="flex flex-center q-mb-md">
      <post />
    </div>

    <div class="container-bottom fixed-bottom z-max q-pb-md">
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
import Post from "components/Post/index.vue";
import BottonBar from "components/BottomBar/index.vue";

</script>

<style lang="scss" scoped>
.container-bottom{
  background-color: #FAFAFA;
}
</style>

