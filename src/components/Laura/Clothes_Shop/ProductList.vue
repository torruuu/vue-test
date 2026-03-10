<script setup>


</script>



<template>
    <div class="max-w-4xl mx-auto">
        <div class="flex justify-between items-center py-4 bg-white/50 px-8 rounded-2xl shadow-md mb-2">
            <slot name="imagen" />
            <slot name="nombre" />
            <slot name="precio" />
            <slot name="acciones" />
        </div>
    </div>
</template>
