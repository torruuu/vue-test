<script setup>
import ClothesCard from '@/components/Laura/Clothes_Shop/ClothesCard.vue'
import { useProductos } from '@/composables/useProducts'
import { ref, watch } from 'vue'

const { productos, loading, error, fetchData, cargarMas } = useProductos()

const limit = ref(6)
fetchData("/products")

const finalPagina = ref(null)

const chivato = new IntersectionObserver((elementos) => {
    if (elementos[0].isIntersecting && !loading.value) {
        limit.value += 3
        cargarMas(limit.value)
    }
})

watch(finalPagina, (ultimaFila) => {
    if (ultimaFila) chivato.observe(ultimaFila)
})
</script>

<template>
    <div class="py-32 px-32">
        <div class="flex flex-col items-center">
            <div v-if="loading && !productos" class="text-2xl">Cargando...</div>
            <div v-else-if="error" class="text-2xl">{{ error }}</div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ClothesCard v-for="producto in productos" :key="producto.id" :producto="producto" />
            </div>
            <div v-if="loading && productos" class="mt-6 text-gray-400">
                Cargando más...
            </div>
            <div ref="finalPagina" class="h-1 w-full mt-10"></div>
        </div>
    </div>
</template>