<script setup>
import { Plus } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="fixed top-4 right-36 z-50">
    <button @click="router.push('/create-product')" class="relative bg-white p-3 rounded-full shadow-lg">
      <Plus :size="22" />
    </button>
  </div>
</template>