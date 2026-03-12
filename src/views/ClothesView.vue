<script setup>
import ClothesCard from '@/components/Laura/Clothes_Shop/ClothesCard.vue'
import { useProductos } from '@/composables/useProducts';

const { productos, loading, error, cargarProductos, cargarMas } = useProductos()

cargarProductos()
</script>

<template>
    <div class="py-32 px-32">
        <div class="min-h-screen flex flex-col items-center">
            <div v-if="loading" class="text-2xl">Cargando...</div>
            <div v-else-if="error" class="text-2xl">{{ error }}</div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ClothesCard v-for="producto in productos" :key="producto.id" :producto="producto" />
            </div>
            <button v-if="!loading" @click="cargarMas"
                class="mt-10 px-6 py-2 border bg-gray-500 text-white rounded-full">
                Cargar más
            </button>
        </div>
    </div>
</template>