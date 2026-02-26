<script setup>
import { ref } from 'vue';
import BookingForm from './BookingForm.vue';

const reserva = ref(null);

//Capturamos el evento emit del hijo
function imprime(datos) {
    console.log(datos)
    reserva.value = datos

}
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center bg-gray-700 gap-4">
        <div class="w-full max-w-xl">
            <div v-if="reserva" class="text-white mb-6">
                <h2 class="font-bold text-lg mb-2">Reserva confirmada:</h2>
                <p>Entrada: {{ reserva.fechaEntrada }}</p>
                <p>Salida: {{ reserva.fechaSalida }}</p>
                <p>Huéspedes: {{ reserva.huespedes }}</p>
                <p>Noches: {{ reserva.numeroNoches }}</p>
                <p>Total: {{ reserva.precioTotal }}€</p>
            </div>
            <BookingForm @reserva="imprime" />
        </div>
    </div>
</template>