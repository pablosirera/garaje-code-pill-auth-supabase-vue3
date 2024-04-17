<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <RouterLink to="/auth-link">Login with magic link</RouterLink>
    <RouterLink to="/auth-email">Login with email & password</RouterLink>
  </div>
</template>
