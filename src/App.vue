<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">My Fleet</RouterLink>
      <RouterLink to="/iss">ISS Tracker</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style></style>
