<script setup>
import { onMounted, ref } from 'vue'
import AppAccount from '../components/AppAccount.vue'
import AppAuth from '../components/AppAuth.vue'
import { supabase } from '../supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <AppAccount v-if="session" :session="session" />
    <AppAuth v-else />
  </div>
</template>
