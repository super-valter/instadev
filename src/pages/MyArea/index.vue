<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="flex flex-center">
      <div class="flex justify-end q-pa-md full-width">
        <q-icon class="fa-solid fa-bars" size="31px" color="black" />
      </div>
      <q-page class="conteiner-standard q-pa-md">
        <div class="flex flex-center">
          <q-icon class="fa-solid fa-lock" size="11px"></q-icon>
          <strong class="q-mx-sm">super_valter</strong>
          <q-icon class="fa-solid fa-chevron-down"></q-icon>
        </div>
        <div class="flex justify-between items-center">
          <div class="column items-center">
            <q-avatar size="96px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </div>
          <div class="column items-center">
            <strong>50</strong>
            <span>Posts</span>
          </div>
          <div class="column items-center">
            <strong>50</strong>
            <span>Seguidores</span>
          </div>
          <div class="column items-center">
            <strong>50</strong>
            <span>Seguindo</span>
          </div>
        </div>
        <div class="column">
          <strong>Valter</strong>
          <span>@super_valter</span>
          <span>dsdsds</span>
        </div>
        <div>
          <q-btn
            flat
            outline
            dense
            text-color="black"
            label="Editar perfil"
            class="full-width btn-edit"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyArea',
})
</script>

<style scoped lang="scss">
.btn-edit {
  text-transform: none;
  border: 1px solid rgba(60, 60, 67, 0.18);
}
</style>
