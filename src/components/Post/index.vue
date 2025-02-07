<template>
  <div class="column box-post conteiner-standard">
    <div class="flex flex-center justify-between q-pa-sm post-user">
      <div class="row items-center">
        <q-avatar class="q-mr-sm">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="column name-location">
          <strong>Nome</strong>
          <span>Tokyo, Japan</span>
        </div>
      </div>
      <q-icon name="fa-solid fa-ellipsis-vertical" size="sm" color="gray" />
    </div>
    <div class="img post-img">
      <q-img
        src="https://picsum.photos/500/300"
        :ratio="1"
        @dblclick="addLikeInPost()"
        class="cursor-pointer likned-post"
      >
        <q-icon
          name="fa-solid fa-heart background-font-degrade"
          size="xl"
          :class="!liked ? '' : 'animete-like'"
          v-if="liked"
          class="absolute-center"
        />
      </q-img>
    </div>
    <div class="flex justify-between q-px-sm q-pt-sm post-interactions">
      <div class="flex text-caption">
        <div class="flex items-center q-mr-md qtd-likes">
          <q-img
            src="../../assets/heart.svg"
            @click="addLikeInPost()"
            class="q-mr-xs cursor-pointer"
            width="24px"
          ></q-img>
          9.000
        </div>
        <div class="flex items-center q-mr-md comments">
          <q-img src="../../assets/comment.svg" class="q-mr-xs" width="24px" />
          545
        </div>
        <div class="flex items-center q-mr-md post-shipping">
          <q-img src="../../assets/direct.svg" class="q-mr-xs" width="24px" />
          54
        </div>
      </div>
      <div class="saved">
        <q-img src="../../assets/saved.svg" width="24px" />
      </div>
    </div>
    <div class="flex items-center q-px-sm q-py-sm post-likes">
      <div class="flex items-center">
        <q-avatar class="q-mr-xs" size="17px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
      <span> Curtido por <strong>adriano e outras pessoas</strong> </span>
    </div>
    <div class="q-px-sm post-content">
      <strong>Nome</strong> Olha o texto do post
      <span class="text-weight-thin cursor-pointer">...mais</span>
    </div>
    <div class="q-px-sm post-date">
      <span class="text-weight-thin">Há 1 dia</span> • Ver tradução
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'Post',
})

const liked = ref<boolean>(false)

const addLikeInPost = () => {
  liked.value = !liked.value
  setTimeout(() => {
    liked.value = !liked.value
  }, 510)
}
</script>

<style lang="scss" scoped>
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
