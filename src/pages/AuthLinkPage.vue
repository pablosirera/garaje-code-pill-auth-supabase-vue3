<script setup>
import AppAccount from '@/components/AppAccount.vue'
import AppAuthMagic from '@/components/AppAuthMagic.vue'
</script>

<template>
  <div>
    <AppAccount v-if="user" :user="user" />
    <AppAuthMagic v-else />
  </div>
</template>
