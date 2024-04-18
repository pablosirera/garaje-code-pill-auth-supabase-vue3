<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const { getSession } = useAuth()

onMounted(() => {
  getSession()
})
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <RouterLink to="/auth-link">Login with magic link</RouterLink>
    <RouterLink to="/auth-email">Login with email & password</RouterLink>
  </div>
</template>
