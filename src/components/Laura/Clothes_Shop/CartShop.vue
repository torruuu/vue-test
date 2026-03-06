<script setup>
import { ShoppingCart, CircleX } from 'lucide-vue-next'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import { useTotalStore } from '@/stores/totalStore';

const datos = useCartStore()
const estado = ref(false);
const router = useRouter()
const { total } = storeToRefs(useTotalStore())

function irA() {
    estado.value = false
    router.push('/cartshop')
}

function eliminar(productoID) {
    datos.removeProduct(productoID)
}
</script>

<template>
    <div v-if="estado" class="fixed inset-0 backdrop-blur-sm" @click="estado = false"></div>
    <button @click="estado = !estado" class="rounded-full p-3 bg-transparent font-bold shadow-lg">
        <ShoppingCart size="32" />
    </button>
    <div v-if="estado" class="absolute top-16 right-6 bg-white shadow-xl rounded-2xl p-4 w-82 mt-2 z-10">
        <div v-for="producto in datos.cart" :key="producto.id" class="flex justify-between items-center py-2 gap-2">
            <img :src="producto.imagen" class="w-10 h-10 object-cover rounded-lg">
            <span class="text-sm">{{ producto.nombre }}</span>
            <span class="text-sm">{{ producto.cantidad }} ud</span>
            <span class="text-sm">{{ producto.precio * producto.cantidad }} €</span>
            <button @click="eliminar(producto.id)" class="">
                <CircleX class="fill-red-200" />
            </button>
        </div>
        <div class="flex justify-end mt-2 mb-2">
            <span class="font-bold">Total: {{ total }} €</span>
        </div>
        <button @click="irA" class="bg-green-200 shadow-sm rounded-2xl p-2 w-full mt-2">
            Ir al carrito
        </button>
    </div>
</template>