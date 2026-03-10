<script setup>
import ClothesCard from '@/components/Laura/Clothes_Shop/ClothesCard.vue';
import { ref, onMounted } from 'vue';
import { getProductos } from '@/api/api';

const productos = ref([])

onMounted(async () => {
    productos.value = await getProductos()
});

</script>

<template>
    <div class="py-32 px-32">
        <div class="min-h-screen flex items-center justify-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ClothesCard v-for="producto in productos" :key="producto.id" :producto="producto" />
            </div>
        </div>
    </div>

</template>