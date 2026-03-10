<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCarroStore } from '../stores/carroStore.js'
import { ShoppingCart, X } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import ProductoItem from '../components/ProductoItem.vue'

const mostrarCarro = ref(false)
const carro = useCarroStore()
const { itemsCarro, total } = storeToRefs(carro)


const router = useRouter()

function irAlCarrito() {
  mostrarCarro.value = false
  router.push('/carrito')
}
function removeItem(item){
  carro.removeItem(item.id);
}
</script>

<template>
  <div class="fixed top-4 right-4 z-50">
    <button @click="mostrarCarro = !mostrarCarro" class="relative bg-white p-3 rounded-full shadow-lg">
      <ShoppingCart :size="22" />
    </button>

    <div v-if="mostrarCarro" class="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl p-4">
      <h2 class="text-lg font-bold mb-3">🛒</h2>

      <p v-if="itemsCarro.length === 0" class="text-gray-400 text-sm">
        El carrito está vacío.
      </p>

      <ul v-else class="flex flex-col gap-2">
        <ProductoItem v-for="item in itemsCarro" :key="item.id" :product="item">
        <template #acciones>
          <span class="text-gray-500 text-xs">x{{ item.cantidad }}</span>  
          <button @click="removeItem(item)" class="text-red-400 hover:text-red-600">
            <X :size="14" />
          </button>
            
          
        </template>
      </ProductoItem>
    </ul>
      <div v-if="itemsCarro.length > 0" class="mt-4 border-t pt-3 flex justify-between items-center font-bold">
        <span>Total: {{ total }} €</span>
        <button @click="irAlCarrito" class="text-sm bg-black text-white px-3 py-1 rounded-xl hover:bg-gray-800">
          Ver carrito →
        </button>
      </div>
    </div>
  </div>
</template>