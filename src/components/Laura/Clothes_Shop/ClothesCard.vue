<script setup>
defineProps({
    producto: Object
})

</script>
<template>
    <router-link :to="`/clothes/${producto.id}`">
        <div class="flex flex-col shadow-md rounded-3xl p-4 bg-white h-full">
            <img :src="producto.image" :alt="`imagen ${producto.title}`" class="w-full h-64 object-contain">
            <div class="font-bold line-clamp-2 mt-2">{{ producto.title }}</div>
            <div>{{ producto.price }} €</div>
        </div>
    </router-link>
</template>