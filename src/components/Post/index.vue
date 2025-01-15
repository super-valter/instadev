<template>
  <div class="column">
    <div class="flex flex-center justify-between q-pa-sm box-post">
      <div class="row items-center ">
        <q-avatar class="q-mr-sm">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <div class="column">
          <strong>Nome</strong>
          <span>Tokyo, Japan</span>
        </div>
      </div>
      <q-icon name="fa-solid fa-ellipsis-vertical" size="sm" color="gray" />
    </div>
    <div class="img">
      <q-img
        src="https://picsum.photos/500/300"
        :ratio="1"
        @dblclick="addLikeInPost()"
        class="cursor-pointer"
      >
        <q-icon
          name="fa-solid fa-heart background-font-degrade"
          size="xl"
          :class="!liked ? '' : 'animete-like'"
          v-if="liked"
          class="absolute-center" />
      </q-img>
    </div>
    <div class="flex justify-between q-px-sm q-pt-sm">
      <div class="flex text-caption">
        <div class="flex items-center q-mr-md">
          <q-img src="../../assets/heart.svg" @click="addLikeInPost()" class="q-mr-xs cursor-pointer" width="24px" />
          9.000
        </div>
        <div class="flex items-center q-mr-md">
          <q-img src="../../assets/comment.svg" class="q-mr-xs" width="24px" />
          545
        </div>
        <div class="flex items-center q-mr-md">
          <q-img src="../../assets/direct.svg" class="q-mr-xs" width="24px" />
          54
        </div>
      </div>
      <div>
        <q-img src="../../assets/saved.svg" width="24px" />
      </div>
    </div>
    <div class="flex items-center q-px-sm q-py-sm">
      <div class="flex items-center">
        <q-avatar class="q-mr-xs" size="17px">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
      <span>
        Curtido por <strong>adriano e outras pessoas</strong>
      </span>
    </div>
    <div class="q-px-sm">
      <strong>Nome</strong> Olha o texto do post <span class="text-weight-thin cursor-pointer">...mais</span>
    </div>
    <div class="q-px-sm">
      <span class="text-weight-thin">Há 1 dia</span> • Ver tradução
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: "Post",
});

const liked = ref<boolean>(false);

const addLikeInPost = () => {
  liked.value = !liked.value
  setTimeout(() => {
    liked.value = !liked.value
  }, 510)
}
</script>

<style lang="scss" scoped>
.box-post{
  width: 400px;
}
.img {
  display: contents;
}
.animete-like {
  animation-duration: 500ms;
  animation-name: liked;
}

@keyframes liked {
  from {
    font-size: 45px;
  }
  10% {
    font-size: 48px;
  }
  75% {
    font-size: 75px;
  }
  90% {
    font-size: 73px;
  }
  to {
    font-size: 0px;
  }
}
</style>
