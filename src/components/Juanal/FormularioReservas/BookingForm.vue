<script setup>
import {ref, computed} from 'vue';
//Variables declaradas. Reactivas. Cambian en funcion de los valores de los input.
const fechaEntrada = ref('');
const fechaSalida = ref('');
const huespedes = ref('');
const habitacion = ref('');
//Primera funcion COMPUTED. Mete en dos variables nuevas las recogidas en los input y nos da dos opciones. Si esta todo OK muestra las noches si no me muestras el mensaje de Error.
//Eso lo elegimos abajo con v-if.
const calcularNoches = computed(() => {
    if(!fechaEntrada.value || !fechaSalida.value) return null;
    //Objeto DATE. Necesario para poder realizar la resta.
    const entrada = new Date(fechaEntrada.value);
    const salida = new Date(fechaSalida.value);
    if(salida <= entrada) {
        return {error: 'La fecha de salida debe ser posterior a la de entrada.'};
    }
    const nochesTotales = (salida - entrada) / (1000 * 60 * 60 * 24);
    return {nochesTotales};
})
//Segunda funcion COMPUTED. 
const calcularPrecio = computed (() => {
    if (huespedes.value === '') return null;
    if (huespedes.value <1 || huespedes.value >4) 
        return {error: 'El número de huespedes debe estar entre 1-4'};
    let calculoPrecio=0;
    //Variable noches para acceder ak valor de la otra COMPUTED
    const noches = calcularNoches.value;
    const nochesTotales = noches.nochesTotales;
        if (habitacion.value == 'standard') {
        calculoPrecio = 100 * nochesTotales*huespedes.value;
    }
    else if (habitacion.value == 'deluxe') {
        calculoPrecio = 180 * nochesTotales*huespedes.value;
    }
    else if (habitacion.value == 'suite')
    { calculoPrecio = 250 * nochesTotales*huespedes.value}
    return {calculoPrecio};

})
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
                <input id="huespedes" name="huespedes" type="number" min="1" max="4" class="bg-gray-400 border-4 rounded-sm p-2" v-model="huespedes">
            </div>
            <div class="flex flex-col gap-1">
                <label for="room" class="font-mono text-lg">Habitación</label>
                <select id="room" name="room" class="bg-gray-400 border-4 rounded-sm p-2" v-model="habitacion">
                    <option value="" disabled selected>Elige una habitación</option>
                    <option value="standard">Estándar (100€)</option>
                    <option value="deluxe">Deluxe (180€)</option>
                    <option value="suite">Suite (250€)</option>
                </select>
            </div>
        </div>

        <div class="text-center">
            <p v-if="calcularNoches?.nochesTotales">Total: {{ calcularNoches.nochesTotales }} noches</p>
            <p v-if="calcularNoches?.error" class="text-red-500">{{ calcularNoches.error }}</p>
        </div>
        <div class="text-center">
            <p v-if="calcularPrecio?.calculoPrecio">Total: {{ calcularPrecio.calculoPrecio }} €</p>
            <p v-if="calcularPrecio?.error" class="text-red-500">{{ calcularPrecio.error }}</p>
        </div>
        </div>
</template>