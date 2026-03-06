<script setup>
import { useRoute, useRouter } from 'vue-router'
import { productos } from '@/data/productos.js'
import { Heart, Undo2, Star } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cartStore'
import { useFavoritesStore } from '@/stores/favoritesStore'

const storeFav = useFavoritesStore()
const store = useCartStore()
const route = useRoute()
const router = useRouter()
const producto = productos.find(p => p.id === Number(route.params.id))

//Funcion para añadir a favoritos
function handleFavorite() {
    storeFav.marcarFavorito(producto)
}

//Funcion para añadir productos
function handleaddProduct() {
    store.addProduct(producto)
}

// De esta manera si no hay producto te redirige a la vista notfound pero desde script
if (!producto) {
    router.push({ name: 'notfound' })
}

</script>

<template>
    <div v-if="producto">
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
        <div class="max-w-3xl mx-auto grid grid-cols-2">
            <div class="border rounded-xl mr-4">
                <img :src="producto.imagen" :alt="producto.nombre" class="rounded-xl p-4 border bg-white">
            </div>
            <div class="flex flex-col">
                <div class="mt-4 font-bold text-2xl">
                    {{ producto.nombre }}
                </div>
                <div class="mt-4 text-xl">
                    {{ producto.descripcion }}
                </div>
                <div class="mt-4 text-xl">
                    <div class="flex gap-1">
                        <Star v-for="estrella in 5" :key="estrella"
                            :class="estrella <= producto.rating.rate ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 fill-gray-300'" />
                        ({{ producto.rating.count }})
                    </div>
                    <div class="mt-4 text-xl font-bold">
                        {{ producto.precio }}€
                    </div>
                </div>
                <div class="flex mt-4 gap-4">
                    <button @click="handleaddProduct" class=" inline-block px-6 py-3 rounded-2xl bg-linear-to-br
                        from-green-500 to-green-300 text-black fill-black font-bold shadow-lg">
                        AÑADIR
                    </button>
                    <button @click="handleFavorite" class="rounded-full p-3 bg-white font-bold shadow-lg">
                        <Heart :class="storeFav.esFavorito(producto.id)
                            ? 'text-red-500 fill-red-500'
                            : 'text-gray-300 fill-gray-200'" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>