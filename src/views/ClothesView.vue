<script setup>
import CartShop from '@/components/Laura/Clothes_Shop/CartShop.vue';
import ClothesCard from '@/components/Laura/Clothes_Shop/ClothesCard.vue';
import { productos } from '@/data/productos.js'


</script>
<template>
    <div class="min-h-screen bg-linear-to-br from-orange-100 to-purple-100">
        <div>
            <CartShop />
        </div>
        <div class="min-h-screen flex items-center justify-center">
            <div class="grid grid-cols-3 gap-6">
                <ClothesCard v-for="producto in productos" :key="producto.id" :producto="producto" />
            </div>
        </div>
    </div>

</template>