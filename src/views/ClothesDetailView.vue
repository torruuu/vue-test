<script setup>
import { useRoute } from 'vue-router'
import { Heart, Undo2, Star } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cartStore'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useProductos } from '@/composables/useProducts'

const storeFav = useFavoritesStore()
const store = useCartStore()
const route = useRoute()
const { producto, loading, error, fetchData } = useProductos()

fetchData(route.params.id)

function handleFavorite() {
    storeFav.marcarFavorito(producto.value)
}
function handleaddProduct() {
    store.addProduct(producto.value)
}
</script>

<template>
    <div>
        <div v-if="error" class="flex justify-center items-center h-screen text-2xl">{{ error }}</div>
        <div v-else-if="loading" class="flex justify-center items-center h-screen text-2xl">Cargando...</div>
        <div v-else-if="producto">
            <div class="ml-12 mb-10">
                <router-link to="/clothes" class="inline-block">
                    <div
                        class="w-12 h-12 flex items-center justify-center bg-white/30 backdrop-blur-md rounded-full shadow-lg hover:bg-white/40 transition">
                        <Undo2 size="28" class="text-black" />
                    </div>
                </router-link>
            </div>
            <div class="max-w-3xl mx-auto grid grid-cols-2 gap-4">
                <div class="border rounded-xl mr-4 bg-white p-2">
                    <img :src="producto.image" :alt="producto.title" class="bg-white p-8">
                </div>
                <div class="flex flex-col">
                    <div class="font-bold text-2xl">{{ producto.title }}</div>
                    <div class="mt-4 text-xl">{{ producto.description }}</div>
                    <div class="mt-4 text-xl">
                        <div class="flex gap-1">
                            <Star v-for="estrella in 5" :key="estrella"
                                :class="estrella <= producto.rating.rate ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 fill-gray-300'" />
                            ({{ producto.rating.count }})
                        </div>
                        <div class="mt-4 text-xl font-bold">{{ producto.price }} €</div>
                    </div>
                    <div class="flex mt-4 gap-4">
                        <button @click="handleaddProduct"
                            class="inline-block px-6 py-3 rounded-2xl bg-linear-to-br from-green-500 to-green-300 text-black fill-black font-bold shadow-lg">
                            AÑADIR
                        </button>
                        <button @click="handleFavorite" class="rounded-full p-3 bg-white font-bold shadow-lg">
                            <Heart
                                :class="storeFav.esFavorito(producto.id) ? 'text-red-500 fill-red-500' : 'text-gray-300 fill-gray-200'" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>