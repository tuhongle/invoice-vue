<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink :to="{name: 'home'}"></RouterLink>

  <RouterView />
</template>