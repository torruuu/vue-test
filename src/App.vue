<script setup>
import {ref} from 'vue';
//MODIFICAMOS EL TEMPLATE, METEMOS <NAV> O <div>  EL ROUTER LINK Y LO QUE QUEREMOS QUE NOS LLEVE, LA RUTA.
import CarritoShop from './components/Juanal/RouterShop/CarritoShop.vue'

import { ShoppingCart } from 'lucide-vue-next'

const mostrarCarro = ref(false)

</script>

<template>
    <div class="fixed top-4 right-4 z-50">
      <button @click="mostrarCarro = !mostrarCarro" class="relative bg-white p-3 rounded-full shadow-lg">
        <ShoppingCart :size="22" />
      </button>

      <div v-if="mostrarCarro" class="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl p-4">
        <CarritoShop />
      </div>
    </div>
    <RouterView></RouterView>


</template>

<style scoped></style>
