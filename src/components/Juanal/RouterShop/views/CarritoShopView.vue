<script setup>
import { storeToRefs } from 'pinia'
import { useCarroStore } from '../stores/carroStore.js'
import { X, ArrowLeft } from 'lucide-vue-next'
import ProductoItem from '../components/ProductoItem.vue'
import { useRouter } from 'vue-router'

const carro = useCarroStore()
const { itemsCarro, total } = storeToRefs(carro)
const router = useRouter();

//AQUI IMPORTAMOS EL PRODUCTO ITEM, PORQUE HAY ELEMENTOS COMUNES Y LUEGO EN EL APARTADO TEMPLATE METEMOS EL SLOT ACCIONES. UNO CON DOS BOTONES, OTRO CON UNO.

</script>

<template>
  <div class="max-w-2xl mx-auto p-6 mt-6">
    <button @click="router.back()" class="mb-6 flex items-center gap-2 text-black-500 text-lg font-bold">
  <ArrowLeft :size="18" />
  Volver
</button>
    <h1 class="text-2xl font-bold mb-6">🛒 Tu carrito</h1>

    <p v-if="itemsCarro.length === 0" class="text-gray-400">El carrito está vacío.</p>

    <ul v-else class="flex flex-col gap-4">
      <ProductoItem v-for="item in itemsCarro" :key="item.id" :product="item">
        <template #acciones>
          <span class="text-gray-500">x{{ item.cantidad }}</span>
          <span class="font-bold">{{ (item.price * item.cantidad).toFixed(2) }} €</span>
          <button @click="carro.removeItem(item.id)" class="text-red-400 hover:text-red-600">
            <X :size="18" />
          </button>
        </template>
      </ProductoItem>
    </ul>

    <div v-if="itemsCarro.length > 0" class="mt-6 border-t pt-4 text-right text-xl font-bold">
      Total: {{ total }} €
    </div>
  </div>
</template>