<script setup>

defineProps({
    lista: Array,
});


</script>


<template>
    <div class="max-w-2xl mx-auto">
        <div v-for="articulo in lista" :key="articulo.id"
            class="flex justify-between items-center py-4 px-8 bg-amber-50 rounded-2xl border mb-2">
            <img :src="articulo.imagen" class="w-16 h-16 border object-cover rounded-lg">
            <span>{{ articulo.nombre }}</span>
            <span>{{ articulo.cantidad }} ud</span>
            <span>{{ articulo.precio * articulo.cantidad }} €</span>
            <slot :producto="articulo" />
        </div>
    </div>
</template>