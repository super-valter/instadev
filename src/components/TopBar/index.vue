<template>
  <q-page class="row items-center justify-between q-mx-xl">
    <q-img src="../../assets/camera.svg" width="24px" />
    <q-img src="../../assets/Instagram_logo.svg" width="105px" />
    <div>
      <q-img src="../../assets/reels.svg" width="24px" class="q-mr-md" />
      <q-img src="../../assets/direct.svg" width="24px" />
    </div>
    <div class="q-mt-md">
      <q-toggle
        :model-value="$q.dark.isActive"
        :checked-icon="symRoundedDarkMode"
        :unchecked-icon="symRoundedLightMode"
        size="xl"
        @update:model-value="$q.dark.toggle()"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: "TopBar",
});

import {
  symRoundedDarkMode,
  symRoundedLightMode,
} from '@quasar/extras/material-symbols-rounded';

</script>
