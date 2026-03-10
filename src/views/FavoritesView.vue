<script setup>
import ProductList from '@/components/Laura/Clothes_Shop/ProductList.vue';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { useCartStore } from '@/stores/cartStore';
import { Plus, Heart, Undo2 } from 'lucide-vue-next';

const storeFav = useFavoritesStore()
const storeCart = useCartStore()

function handleFavorite(producto) {
    storeFav.marcarFavorito(producto)
}

function handleAdd(producto) {
    storeCart.addProduct(producto)
    storeFav.marcarFavorito(producto)
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

        <div v-if="storeFav.favorites.length === 0" class="text-center text-gray-400 py-12 text-lg">
            No hay artículos añadidos.
        </div>

        <ProductList v-for="producto in storeFav.favorites" :key="producto.id">
            <template #imagen>
                <img :src="producto.imagen" class="w-16 h-16 border object-cover rounded-lg">
            </template>
            <template #nombre>
                <span>{{ producto.nombre }}</span>
            </template>
            <template #precio>
                <span>{{ producto.precio }} €</span>
            </template>
            <template #acciones>
                <button @click="handleFavorite(producto)">
                    <Heart class="text-red-500 fill-red-500" />
                </button>
                <button @click="handleAdd(producto)">
                    <Plus class="text-green-500" />
                </button>
            </template>
        </ProductList>
    </div>
</template>
