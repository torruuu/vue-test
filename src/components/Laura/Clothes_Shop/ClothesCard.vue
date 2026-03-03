<script setup>
defineProps({
    producto: Object
})

</script>
<template>
    <router-link :to="`/clothes/${producto.id}`">
        <div class="flex flex-col border-4 rounded-3xl p-4 bg-white">
            <img :src="producto.imagen" :alt="`imagen ${producto.nombre}`" class="justify-items-center w-72">
            <div class="font-bold">{{ producto.nombre }}</div>
            <div class="justify-items-start">{{ producto.precio }} €</div>
        </div>
    </router-link>
</template>