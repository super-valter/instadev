<template>
  <div class="flex flex-center justify-between q-mx-md">
    <q-img src="../../assets/camera.svg" width="24px" height="22px" />
    <q-img src="../../assets/Instagram_logo.svg" width="130px" height="37px" />
    <div>
      <q-img src="../../assets/reels.svg" width="24px" class="q-mr-md" />
      <q-img src="../../assets/direct.svg" width="24px" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TopBar',
})
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>
