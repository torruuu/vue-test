<script setup>
import { ref } from 'vue';
import BookingForm from './BookingForm.vue';
import BookingSumary from './BookingSumary.vue';

const reservas = ref([]);
const reservaActual = ref (null);

//Recibimos el emit con una función.
function recibirRegistro(datos) {
    reservaActual.value = datos;
}

function almacenarReserva () {
    if (!reservaActual.value) return;
    const reservaExistente = reservas.value.find (
        (r) =>
        r.fechaEntrada === reservaActual.value.fechaEntrada && r.fechaSalida === reservaActual.value.fechaSalida);
    
    if(reservaExistente) {
        const confirmar = confirm ('Ya existe una reserva para las fechas seleccionadas. ¿Desea añadirla de todos modos?');
        if(!confirmar) return;}
    reservas.value.push ({...reservaActual.value, id:Date.now()});  
}

function eliminarReserva (index){
    reservas.value.splice (index, 1)
    
}

</script>
<template>
    <div v-if="reservaActual" class="font-mono mt-6 text-center">
        <p class="font-mono text-lg">Reserva confirmada:</p>
        <p>Check-in: {{ reservaActual.entrada }}</p>
        <p>Check-out: {{ reservaActual.salida }}</p>
        <p>Huéspedes: {{ reservaActual.huespedes }}</p>
        <p>Habitación: {{ reservaActual.habitacion }}</p>
        <p>Noches: {{ reservaActual.noches }}</p>
        <p>Precio total: {{ reservaActual.precio }} €</p>
        <button @click="almacenarReserva" class="bg-green-500 border-4 rounded-sm p-2" >Confirmar reserva</button>
    </div>
    <div class="flex flex-row flex-wrap justify-center mt-6 gap-20">
        <BookingSumary v-for="(reserva, index) in reservas" :key="index" :reserva="reserva" :id="id" @eliminarReserva="eliminarReserva"/>
        
    </div>
    <div>
        <BookingForm @enviarRegistro="recibirRegistro" />
    </div>
</template>