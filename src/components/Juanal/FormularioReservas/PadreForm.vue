<script setup>
import { ref } from 'vue';
import BookingForm from './BookingForm.vue';
import BookingSumary from './BookingSumary.vue';
import AlertDialog from './AlertDialog.vue';

const reservas = ref([]);
const reservaActual = ref (null);
const mostrarDialog = ref (false);

//Recibimos el emit con una función.
function recibirRegistro(datos) {
    reservaActual.value = datos;
}

function almacenarReserva() {
    if (!reservaActual.value) return;

    const nuevaEntrada = new Date(reservaActual.value.entrada);
    const nuevaSalida = new Date(reservaActual.value.salida);

    const reservaExistente = reservas.value.find(r => {
        const entradaExistente = new Date(r.entrada);
        const salidaExistente = new Date(r.salida);
        return nuevaEntrada <= salidaExistente && nuevaSalida >= entradaExistente;
    });

    if (reservaExistente) {
        mostrarDialog.value = true; 
        return;
    }

    guardarReserva();
}

function guardarReserva() { 
    reservas.value.push({ ...reservaActual.value, id: Date.now() });
}

function eliminarReserva(id) {
    const index = reservas.value.findIndex(r => r.id === id);
    if (index !== -1) {
        reservas.value.splice(index, 1);
    }
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
        <BookingSumary v-for="(reserva, index) in reservas" :key="index" :reserva="reserva" :id="reserva.id" @eliminarReserva="eliminarReserva"/>
        
    </div>
    <div>
        <BookingForm @enviarRegistro="recibirRegistro" />
    </div>
    <AlertDialog
        v-model="mostrarDialog"
        @confirmar="guardarReserva"
    />
</template>