<script setup>
import ClothesCard from '@/components/Laura/Clothes_Shop/ClothesCard.vue'
import { ref } from 'vue'
import { getProductos } from '@/api/api'

const productos = ref([])
const cargando = ref(true)
const error = ref(null)

async function cargarProductos() {
    try {
        productos.value = await getProductos()
    } catch (e) {
        error.value = e.message || "Error al cargar los productos"
    } finally {
        cargando.value = false
    }
}

cargarProductos()
</script>

<template>
    <div class="py-32 px-32">
        <div class="min-h-screen flex items-center justify-center">
            <div v-if="cargando" class="text-2xl">Cargando...</div>
            <div v-else-if="error">{{ error }}</div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ClothesCard v-for="producto in productos" :key="producto.id" :producto="producto" />
            </div>
        </div>
    </div>
</template>