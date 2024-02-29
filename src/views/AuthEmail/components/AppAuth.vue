<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.fullPath)

const loading = ref(false)
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
const signup = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: route.fullPath
      }
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <!-- Añadir dos botones uno para hacer login y otro para signup -->
  <form class="row flex-center flex">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Vue 3</h1>
      <p class="description">Sign in via email and password</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
        <input
          class="inputField"
          required
          type="password"
          placeholder="Your password"
          v-model="password"
        />
      </div>
      <div>
        <button type="button" class="button block" :disabled="loading" @click="login">
          {{ loading ? 'Loading' : 'Login' }}
        </button>
        <button type="button" class="button block" :disabled="loading" @click="signup">
          {{ loading ? 'Loading' : 'Signup' }}
        </button>
      </div>
    </div>
  </form>
</template>
