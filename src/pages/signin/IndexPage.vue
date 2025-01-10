<template>
  <q-page class="flex flex-center column">
    <q-img src="../../assets/Instagram_logo.svg"></q-img>
    <h1>SingIn</h1>
    <q-input filled v-model="text" label="Login" />
    <q-input filled v-model="text" label="Senha" />
    <a href="">Forgot password</a>
    <q-btn color="primary" label="Primary" />
    <div class="flex flex-center">
      <q-icon name="fa-brands fa-facebook" />
      <a href="">Login in with Facebook</a>
    </div>
    <div class="full-width text-center">
      <q-separator />
      or
      <q-separator />
    </div>
    <div>
      Dont't have an account? <a href="">Sign up</a>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('')
</script>
