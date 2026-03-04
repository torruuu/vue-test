<script setup>
import { ShoppingCart } from 'lucide-vue-next'
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const store = useCartStore()
const estado = ref(false);

</script>

<template>
    <div>
        <div v-if="estado" class="fixed inset-0 backdrop-blur-sm" @click="estado = false"></div>

        <div class="relative flex justify-end pr-6 py-6">
            <button @click="estado = !estado">
                <ShoppingCart size="34" />
            </button>

            <div v-if="estado" class="absolute top-16 right-6 bg-white shadow-xl rounded-2xl p-4 w-72 mt-2 z-10">
                <div v-for="producto in store.cart" :key="producto.id" class="flex justify-between items-center py-2">
                    <span>{{ producto.nombre }}</span>
                    <span>{{ producto.precio }} €</span>
                </div>
                <router-link :to="`/cartshop`">
                    <button class="bg-green-200 shadow-sm rounded-2xl p-2 w-64 mt-2 z-10">
                        Ir al carrito
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>