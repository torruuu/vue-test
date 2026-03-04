<script setup>
import { useCartStore } from '@/stores/cartStore';
import { CircleX, Undo2 } from 'lucide-vue-next';
import { computed } from 'vue';

const datos = useCartStore()
console.log(datos)

//Funcion eliminar producto del carro
function eliminar(productoID) {
    datos.removeProduct(productoID)
}

//Funcion total
const total = computed(() => {
    return datos.cart.reduce((acumulador, producto) => acumulador + producto.precio, 0)
})
</script>


<template>
    <div>
        <div class="ml-12 mb-10">
            <router-link to="/clothes">
                <div class="w-12 h-12 flex items-center justify-center
                bg-white/30 backdrop-blur-md
                rounded-full shadow-lg
                hover:bg-white/40 transition">
                    <Undo2 size="28" class="text-black" />
                </div>
            </router-link>
        </div>
        <div class="max-w-2xl mx-auto">
            <div v-for="producto in datos.cart" :key="producto.id"
                class="flex justify-between items-center py-4 px-8 bg-amber-50 rounded-2xl border">
                <img :src="producto.imagen" class="w-16 h-16 border object-cover rounded-lg">
                <span>{{ producto.nombre }}</span>
                <span>{{ producto.precio }} €</span>
                <button @click="eliminar(producto.id)">
                    <CircleX class="fill-red-200" />
                </button>
            </div>
            <span class="flex justify-end mt-4 font-bold text-lg mr-2">
                Total: {{ total }} €
            </span>
        </div>
    </div>

</template>