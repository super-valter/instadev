<template>
  <div class="flex flex-center justify-between q-mx-md">
    <q-img src="../../assets/camera.svg" width="24px" height="22px" />
    <q-img src="../../assets/Instagram_logo.svg" width="105px" height="37px" />
    <div>
      <q-img src="../../assets/reels.svg" width="24px" class="q-mr-md" />
      <q-img src="../../assets/direct.svg" width="24px" />
    </div>
    <!-- <div class="q-mt-md">
      <q-toggle
        :model-value="$q.dark.isActive"
        :checked-icon="symRoundedDarkMode"
        :unchecked-icon="symRoundedLightMode"
        size="xl"
        @update:model-value="$q.dark.toggle()"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "TopBar",
});

/* import {
  symRoundedDarkMode,
  symRoundedLightMode,
} from '@quasar/extras/material-symbols-rounded'; */

</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>
