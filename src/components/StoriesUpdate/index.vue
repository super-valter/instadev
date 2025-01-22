<template>
  <q-scroll-area horizontal :visible="false" class="full-width scroll-area">
    <div class="row no-wrap">
      <div class="full-width" v-for="item in 10" :key="item">
        <div class="column items-center justify-center q-mr-sm stories-item">
          <q-avatar size="62px">
            <img class="avatar" src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <span>Nome</span>
        </div>
      </div>
    </div>
  </q-scroll-area>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StoriesUpdate',
})
</script>

<style lang="scss" scoped>
.scroll-area {
  height: 98px;
}
.q-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: $background-degrade;
  padding: 2px;
  .avatar {
    width: 58px !important;
    height: 58px !important;
    border: 2px solid #fff;
  }
}
</style>
