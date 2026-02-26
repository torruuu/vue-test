<script setup>
import { ref, computed, watch } from 'vue';
//Variables declaradas. Reactivas. Cambian en funcion de los valores de los input.
const fechaEntrada = ref('');
const fechaSalida = ref('');
const huespedes = ref(1);
const habitacion = ref('');
const rooms = [
    { value: 'standard', nombre: 'Estándar', precio: 100 },
    { value: 'deluxe', nombre: 'Deluxe', precio: 180 },
    { value: 'suite', nombre: 'Suite', precio: 250 },
]
//Primera funcion COMPUTED. Mete en dos variables nuevas las recogidas en los input y nos da dos opciones. Si esta todo OK muestra las noches si no me muestras el mensaje de Error.
//Eso lo elegimos abajo con v-if.
const calcularNoches = computed(() => {
    if (!fechaEntrada.value || !fechaSalida.value) return null;
    //Objeto DATE. Necesario para poder realizar la resta.
    const entrada = new Date(fechaEntrada.value);
    const salida = new Date(fechaSalida.value);
    const nochesTotales = (salida - entrada) / (1000 * 60 * 60 * 24);
    if (nochesTotales <= 0) return null;
    return nochesTotales;
})

//VALIDACIONES.
//Validacion fecha salida.
const errorFecha = computed(() => {
    if (!fechaEntrada.value || !fechaSalida.value) return null;
    if (fechaSalida.value <= fechaEntrada.value) {
        return 'Lafecha de salida debe ser posterior a la fecha de entrada';
    }
    return null
})
//Validacion huespedes:

const errorHuespedes = computed(() => {
    if (huespedes.value < 1 || huespedes.value > 4) {
        return 'La cantidad minima de huéspedes es de 1 y la máxima es de 4'
    }
    return null
})

//Segunda funcion COMPUTED. 
const calcularPrecio = computed(() => {
    if (!habitacion.value || !huespedes.value) return null;
    if (errorFecha.value || errorHuespedes.value) return null;
    const room = rooms.find(r => r.value === habitacion.value);
    const calculoPrecio = huespedes.value * room.precio * calcularNoches.value;
    return calculoPrecio;
})
//No queremos botones, metemos un watch que observa la funcion y manda los datos si cambian...
const emit = defineEmits(['enviarRegistro']);
watch([fechaEntrada, fechaSalida, huespedes, habitacion], () => {
    if(!errorFecha.value && !errorHuespedes.value && habitacion.value && huespedes.value) {
    emit ('enviarRegistro', {
        entrada: fechaEntrada.value, 
        salida: fechaSalida.value, 
        huespedes: huespedes.value, 
        habitacion: habitacion.value, 
        noches: calcularNoches.value, 
        precio: calcularPrecio.value})
}});

</script>

<template>
    <div class="flex flex-col items-center gap-6 mt-10">

        <div class="flex items-center justify-center gap-10">
            <div class="flex flex-col gap-1">
                <span class="font-mono text-lg">Check-in</span>
                <input class="bg-gray-400 border-4 rounded-sm p-2" type="date" v-model="fechaEntrada">
            </div>
            <div class="flex flex-col gap-1">
                <span class="font-mono text-lg">Check-out</span>
                <input class="bg-gray-400 border-4 rounded-sm p-2" type="date" v-model="fechaSalida">
            </div>
        </div>

        <div class="flex items-center justify-center gap-10">
            <div class="flex flex-col gap-1">
                <label for="huespedes" class="font-mono text-lg">Huéspedes</label>
                <input id="huespedes" name="huespedes" type="number" min="1" max="4"
                    class="bg-gray-400 border-4 rounded-sm p-2" v-model="huespedes">
            </div>
            <div class="flex flex-col gap-1">
                <label for="room" class="font-mono text-lg">Habitación</label>
                <select id="room" name="room" class="bg-gray-400 border-4 rounded-sm p-2" v-model="habitacion">
                    <option value="" disabled selected>Elige una habitación</option>
                    <option v-for="room in rooms" :key="room.value" :value="room.value">
                        {{ room.nombre }} ({{ room.precio }}€)
                    </option>
                </select>
            </div>
        </div>

        <div class="flex items-center justify-center gap-10 font-mono text-lg">
            <span v-if="calcularNoches">Número de noches: {{ calcularNoches }}</span>
            <span>Total: {{ calcularPrecio }} €</span>

        </div>
        <div class="text-center">
            <p v-if="errorFecha" class="text-red-500">{{ errorFecha }}</p>
            <p v-if="errorHuespedes" class="text-red-500">{{ errorHuespedes }}</p>
        </div>
    </div>
</template>