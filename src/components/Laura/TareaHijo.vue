<script setup>

const props = defineProps({        // Meto los props en una variable para poder acceder a su contenido en las funciones
    id: Number,
    nombre: String,
    estado: Boolean
})

// Hay que declarar el evento personalizado
const emit = defineEmits(['marcar', 'borrado']);
// Cuando hacemos click capturamos el evento y llamamos a esta funcion
function marcada() {
    emit('marcar', props.id)
}
//Funcion para eliminar tareas
function borrar() {
    emit('borrado', props.id)
}
</script>

<template>
    <div class="w-2xl">
        <li class="flex justify-between items-center w-full">
            <span :class="estado && 'line-through'">{{ nombre }}</span>
            <div>
                <button v-if="!estado" @click="marcada" class="bg-green-400 rounded-l-lg p-2">Completar
                </button>
                <button @click="borrar" class="bg-red-300 border-red-900 rounded-r-lg p-2">Borrar</button>
            </div>
        </li>
    </div>
</template>
