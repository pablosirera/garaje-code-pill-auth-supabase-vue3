<script setup>
import AppAccount from '@/components/AppAccount.vue'
import AppAuthMagic from '@/components/AppAuthMagic.vue'
import { useUser } from '@/composables/useUser'

const { user } = useUser()
</script>

<template>
  <div>
    <AppAccount v-if="Object.keys(user).length" :user="user" />
    <AppAuthMagic v-else />
  </div>
</template>
