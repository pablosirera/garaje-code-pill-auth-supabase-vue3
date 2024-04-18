<script setup>
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue'

const loading = ref(false)
const email = ref('')
const { loginWithMagicLink } = useAuth()

const handleLogin = async () => {
  try {
    loading.value = true
    await loginWithMagicLink({ email: email.value })
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1>Supabase + Vue 3 Magic Link</h1>
  <form @submit.prevent="handleLogin()">
    <input required type="email" placeholder="Your email" v-model="email" />

    <button type="submit" :disabled="loading">
      {{ loading ? 'Loading' : 'Send' }}
    </button>
  </form>
</template>
