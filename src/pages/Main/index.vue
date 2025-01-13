<template>
  <q-page class="flex flex-center">
    <div class="container full-width ">
      <top-bar />
    </div>
  </q-page>
</template>
<script setup lang="ts">
defineOptions({
  name: "MainPage",
});

import topBar from "components/TopBar/index.vue";
</script>

<style lang="scss" scoped>
.container {
  max-width: 720px;
}
</style>
