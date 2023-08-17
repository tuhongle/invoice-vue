<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import modal from './components/modal.vue';
</script>

<template>
  <RouterLink :to="{name: 'home'}"></RouterLink>

  <RouterView />
  <Teleport to="#modal">
    <modal />
  </Teleport>
</template>