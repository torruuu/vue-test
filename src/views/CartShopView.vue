<script setup>
import { useCartStore } from '@/stores/cartStore';
import { CircleX, Undo2 } from 'lucide-vue-next';
import { useTotalStore } from '@/stores/totalStore';
import { storeToRefs } from 'pinia';
import ProductList from '@/components/Laura/Clothes_Shop/ProductList.vue';

const datos = useCartStore()
const { total } = storeToRefs(useTotalStore())

function eliminar(productoID) {
    datos.removeProduct(productoID)
}
</script>

<template>
    <div>
        <div class="ml-12 mb-10">
            <router-link to="/clothes">
                <div class="inline-flex w-12 h-12 items-center justify-center
                bg-white/30 backdrop-blur-md
                rounded-full shadow-lg
                hover:bg-white/40 transition">
                    <Undo2 size="28" class="text-black" />
                </div>
            </router-link>
        </div>

        <div class="max-w-2xl mx-auto">
            <div v-if="datos.cart.length === 0" class="text-center text-gray-400 py-12 text-lg">
                No hay artículos añadidos.
            </div>

            <ProductList v-for="producto in datos.cart" :key="producto.id">
                <template #imagen>
                    <img :src="producto.imagen" class="w-16 h-16 border object-cover rounded-lg">
                </template>
                <template #nombre>
                    <span>{{ producto.nombre }}</span>
                </template>
                <template #precio>
                    <span>{{ producto.cantidad }} ud</span>
                    <span>{{ producto.precio * producto.cantidad }} €</span>
                </template>
                <template #acciones>
                    <button @click="eliminar(producto.id)">
                        <CircleX class="text-red-700" />
                    </button>
                </template>
            </ProductList>

            <span v-if="datos.cart.length > 0" class="flex justify-end mt-4 font-bold text-lg mr-2">
                Total: {{ total }} €
            </span>
        </div>
    </div>
</template>
