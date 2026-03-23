<script setup>
defineProps({
    producto: Object
})
</script>

<template>
    <router-link :to="`/clothes/${producto.id}`">
        <div class="flex flex-col shadow-md rounded-3xl p-4 bg-white h-full">
            <div class="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span class="text-xl">🛍️</span>
            </div>
            <div class="text-xs text-gray-400 uppercase tracking-widest mt-3">{{ producto.category }}</div>
            <div class="font-bold line-clamp-2 mt-1">{{ producto.name }}</div>
            <div class="mt-1">{{ producto.price }} €</div>
        </div>
    </router-link>
</template>
