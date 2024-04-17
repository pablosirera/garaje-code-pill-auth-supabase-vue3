<script setup>
import AppAccount from '@/components/AppAccount.vue'
import AppAuthPassword from '@/components/AppAuthPassword.vue'
</script>

<template>
  <div>
    <AppAccount v-if="user" :user="user" />
    <AppAuthPassword v-else />
  </div>
</template>
