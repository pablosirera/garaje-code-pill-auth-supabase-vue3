<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0; display: flex; flex-direction: column">
    <RouterLink to="/auth-link">Login with magic link</RouterLink>
    <RouterLink to="/auth-email">Login with email & password</RouterLink>
  </div>
</template>
