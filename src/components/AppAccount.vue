<script setup>
import { useSupabase } from '@/composables/useSupabase'
import { onMounted, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['user'])
const { user } = toRefs(props)

const loading = ref(false)
const username = ref()
const { supabase } = useSupabase()
const router = useRouter()

onMounted(() => {
  getProfile()
})

const getProfile = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase
      .from('profiles')
      .select(`username`)
      .eq('id', user.value.id)
      .single()

    if (error) throw error

    if (data) {
      username.value = data.username
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true

    const updates = {
      id: user.value.id,
      username: username.value,
      updated_at: new Date()
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    router.push('/')
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" disabled v-model="user.email" />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>

    <button type="submit" :disabled="loading">
      {{ loading ? 'Loading ...' : 'Update' }}
    </button>
    <div>
      <button @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>
