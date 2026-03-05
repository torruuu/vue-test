<script setup>

import { Heart } from 'lucide-vue-next'
import { useRouter } from 'vue-router'


const router = useRouter()
</script>

<template>
  <div class="fixed top-4 right-20 z-50">
    <button @click="router.push('/favoritos')" class="relative bg-white p-3 rounded-full shadow-lg">
      <Heart :size="22" fill="#ef4444" class="text-red-500" />
    </button>
  </div>
</template>