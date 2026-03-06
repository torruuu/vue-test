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
}
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
        <ProductList :lista="storeFav.favorites">
            <template #default="{ producto }">
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