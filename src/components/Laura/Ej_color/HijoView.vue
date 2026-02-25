<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
    color: String
});

const colorHijo = ref(props.color);
const emit = defineEmits(['color-change']);

//Función para emitir el evento personalizado al padre
function changeColor(event) {
    const color = event.target.value;
    emit('color-change', color);
}
//Watch para que cuando cambia el color lo emita al padre
watch(colorHijo, (nuevoValor) => {
    emit('color-change', nuevoValor);
});

</script>

<template>
    <div class="flex items-center gap-6 mt-4">
        <div class="flex flex-col items-center justify-center">
            <input type="color" @input="changeColor" v-model="colorHijo">
            <input type="text" @input="changeColor" v-model="colorHijo" class="border w-24 rounded-md p-0.5 pl-2">
        </div>
    </div>
</template>