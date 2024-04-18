<script setup>
import AppAccount from '@/components/AppAccount.vue'
import AppAuthPassword from '@/components/AppAuthPassword.vue'
import { useUser } from '@/composables/useUser'

const { user } = useUser()
</script>

<template>
  <div>
    <AppAccount v-if="Object.keys(user).length" :user="user" />
    <AppAuthPassword v-else />
  </div>
</template>
