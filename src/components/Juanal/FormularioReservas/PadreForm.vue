<script setup>
import { ref } from 'vue';
import BookingForm from './BookingForm.vue';

const reserva = ref(null)
//Recibimos el emit con una función.
function recibirRegistro(entrada, salida, huespedes, habitacion, noches, precio) {
    reserva.value = { entrada, salida, huespedes, habitacion, noches, precio }
}
</script>
<template>
    <div v-if="reserva" class="font-mono mt-6 text-center">
        <p class="font-mono text-lg">Reserva confirmada:</p>
        <p>Check-in: {{ reserva.entrada }}</p>
        <p>Check-out: {{ reserva.salida }}</p>
        <p>Huéspedes: {{ reserva.huespedes }}</p>
        <p>Habitación: {{ reserva.habitacion }}</p>
        <p>Noches: {{ reserva.noches }}</p>
        <p>Precio total: {{ reserva.precio }} €</p>
    </div>
    <div>
        <BookingForm @enviarRegistro="recibirRegistro" />
    </div>
</template>