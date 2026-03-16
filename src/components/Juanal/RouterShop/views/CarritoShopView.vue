<script setup>
import { storeToRefs } from 'pinia'
import { useCarroStore } from '../stores/carroStore.js'
import { X, ArrowLeft } from 'lucide-vue-next'
import ProductoItem from '../components/ProductoItem.vue'
import { useRouter } from 'vue-router'

const carro = useCarroStore()
const { itemsCarro, total } = storeToRefs(carro)
const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-slate-800 p-8 pt-16">
    <div class="max-w-2xl mx-auto">

      <button @click="router.back()" class="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
        <ArrowLeft :size="16" />
        Volver a la tienda
      </button>

      <div class="flex items-center gap-3 mb-8">
        <h1 class="text-3xl font-bold text-white">Tu carrito</h1>
        <span v-if="itemsCarro.length > 0" class="bg-slate-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">
          {{ itemsCarro.length }}
        </span>
      </div>

      <p v-if="itemsCarro.length === 0" class="text-slate-400 text-sm">
        El carrito está vacío.
      </p>

      <ul v-else class="flex flex-col gap-3">
        <ProductoItem v-for="item in itemsCarro" :key="item.id" :product="item">
          <template #acciones>
            <span class="text-slate-400 text-sm">x{{ item.cantidad }}</span>
            <span class="font-bold text-slate-800">{{ (item.price * item.cantidad).toFixed(2) }} €</span>
            <button @click="carro.removeItem(item.id)" class="text-red-400 hover:text-red-600 transition-colors">
              <X :size="18" />
            </button>
          </template>
        </ProductoItem>
      </ul>

      <div v-if="itemsCarro.length > 0" class="mt-6 bg-white rounded-2xl p-6 flex items-center justify-between">
        <span class="text-slate-500 text-sm">Total a pagar</span>
        <span class="text-2xl font-bold text-slate-800">{{ total }} €</span>
      </div>

    </div>
  </div>
</template>