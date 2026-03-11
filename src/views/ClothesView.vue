<script setup>
import ClothesCard from '@/components/Laura/Clothes_Shop/ClothesCard.vue'
import { useProductos } from '@/composables/useProducts';

const { productos, loading, error, cargarProductos } = useProductos()

cargarProductos()
</script>

<template>
    <div class="py-32 px-32">
        <div class="min-h-screen flex items-center justify-center">
            <div v-if="loading" class="text-2xl">Cargando...</div>
            <div v-else-if="error" class="text-2xl">{{ error }}</div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ClothesCard v-for="producto in productos" :key="producto.id" :producto="producto" />
            </div>
        </div>
    </div>
</template>