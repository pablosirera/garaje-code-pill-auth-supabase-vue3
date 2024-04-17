<script setup>
import { ref } from 'vue'

const loading = ref(false)
const email = ref('')
const password = ref('')
</script>

<template>
  <h1>Supabase + Vue 3</h1>
  <p>Sign in via email and password</p>
  <form>
    <input required type="email" placeholder="Your email" v-model="email" />
    <input required type="password" placeholder="Your password" v-model="password" />

    <div>
      <button type="button" :disabled="loading" @click="login">
        {{ loading ? 'Loading' : 'Login' }}
      </button>
      <button type="button" :disabled="loading" @click="signup">
        {{ loading ? 'Loading' : 'Signup' }}
      </button>
    </div>
  </form>
</template>
