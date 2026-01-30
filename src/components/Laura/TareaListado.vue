<script setup>
const props = defineProps({        // Meto los props en una variable para poder acceder a su contenido en las funciones
    tareas: Array
});

</script>

<template>
    <div class="flex gap-28 text-xl">
        <h2 class="text-xl underline">Tareas completadas:</h2>
        <li class="contents">
            <span :class="estado ? 'line-through' : ''">{{ nombre }}</span>
            <button @click=""></button>
        </li>
    </div>
</template>