<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="box-photos-insta q-mr-lg" />
    <div class="box-login full-height	">
      <div class="flex flex-center full-width border q-px-lg">
        <q-img class="logo q-my-lg" src="../../assets/Instagram_logo.svg" />
        <q-input filled v-model="login" label="Telefone, nome de usuário ou email" class="full-width q-mb-md" />
        <q-input filled v-model="password" label="Senha" class="full-width q-mb-md" type="password" />
        <div class="column items-end full-width q-mb-lg">
          <a class="col text-color-primary" color="primary" href="">Esqueceu a senha?</a>
        </div>
        <q-btn color="primary" label="Entrar" class="full-width sing-in-button" />
        <div class="full-width row q-my-lg flex items-center justify-center">
          <q-separator class="separator" inset />
          OU
          <q-separator class="separator" inset />
        </div>
        <div class="flex flex-center q-pb-lg">
          <q-icon name="fa-brands fa-facebook" class="facebook-icon q-mr-sm" />
          <a href="">Entrar com Facebook</a>
        </div>
      </div>
      <div class="text-center border full-width q-my-md q-pa-lg">
        <p class="q-mb-none">Não tem uma conta? <a href="">Cadastre-se</a></p>
      </div>
      <p class="text-body1 text-center q-mb-none">Obtenha o aplicativo.</p>
      <div class="flex flex-center q-mb-md">
        <img src="../../assets/play-store.png"  width="134" height="40" class="q-mr-sm" alt="Google Play">
        <img src="../../assets/apple-store.png" width="134" height="40" alt="App Store">
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const login = ref<string>('')
const password = ref<string>('')
</script>

<style lang="scss" scoped>
.box-login {
 width: 350px;
  .logo {
    width: 175px;
    height: 51px;
  }
  .sing-in-button {
    height: 44px;
    border-radius: 5px;
    background-color: #3797EF;
  }
  .facebook-icon {
    font-size: 1.2rem;
    color: #3797EF;
  }
  .separator {
    width: 35%;
  }
  .border {
    border: 1px solid #dbdbdb;
    border-radius: 8px;
  }
}
.box-photos-insta {
  width: 384px;
  height: 581.15px;
  background: url(/src/assets/home-phones.png);
  background-position: -40px 0px;
  @media (max-width: 875px) {
    display: none;
  }
}
a {
  text-decoration: none;
  color: #3797EF;
}
</style>
