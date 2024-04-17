<script setup>
import { ref } from 'vue'

const loading = ref(false)
const email = ref('')

const handleLogin = () => {}
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
