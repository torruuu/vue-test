<script setup>

const props = defineProps({        // Meto los props en una variable para poder acceder a su contenido en las funciones
    id: Number,
    nombre: String,
    estado: Boolean
})

// Hay que declarar el evento personalizado
const emit = defineEmits(['marcar']);
// Cuando hacemos click capturamos el evento y llamamos a esta funcion
function marcada() {
    emit('marcar', props.id)
}
</script>

<template>
    <div class="flex justify-between">
        <li class="contents">
            <span :class="estado ? 'line-through' : ''">{{ nombre }}</span>
            <button @click="marcada"
                :class="estado ? 'bg-gray-500 border rounded-sm p-2 ml-2' : 'bg-green-500 border-green-900 rounded-sm p-2 ml-2'">
                {{ estado ? 'Completada' : 'COMPLETAR' }}
            </button>
            <button>

            </button>
        </li>
    </div>
</template>
