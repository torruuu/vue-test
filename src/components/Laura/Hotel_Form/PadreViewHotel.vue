<script setup>
import { ref } from 'vue';
import BookingForm from './BookingForm.vue';
import VistaReservas from './VistaReservas.vue';

const reserva = ref(null);
const reservas = ref([]);

//Capturamos el evento emit del hijo
function imprime(datos) {
    reserva.value = datos
};

//Funcion para confirmar reserva
function confirmar() {
    if (reservas.value.some(r => r.fechaEntrada === reserva.value.fechaEntrada && r.fechaSalida === reserva.value.fechaSalida)) {
        const resultado = confirm("Ya tienes una reserva para esas fechas. Quieres seguir con la reserva?");
        if (resultado) {
            reservas.value.push({ ...reserva.value, id: Date.now() });
        }
        return
    }
    if (reserva.value) {
        reservas.value.push({ ...reserva.value, id: Date.now() });
    }
};

//Capturamos el emit eliminar
function eliminar(id) {
    reservas.value = reservas.value.filter(res => res.id !== id);
}
</script>

<template>
    <div class="min-h-screen flex justify-center bg-gray-700 gap-4">
        <div class="w-full max-w-3xl mt-20 flex flex-col">
            <div class="flex justify-between gap-8">
                <div class="w-1/2">
                    <div v-if="reserva" class="mb-6 flex">
                        <div class="text-white">
                            <h2 class="font-bold text-lg mb-2">Reserva confirmada:</h2>
                            <p>Entrada: {{ reserva.fechaEntrada }}</p>
                            <p>Salida: {{ reserva.fechaSalida }}</p>
                            <p>Huéspedes: {{ reserva.huespedes }}</p>
                            <p>Noches: {{ reserva.numeroNoches }}</p>
                            <p>Total: {{ reserva.precioTotal }}€</p>
                            <button @click="confirmar"
                                class="border-green-800 bg-green-600 text-white p-2 rounded-xl mt-2">Confirmar</button>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <VistaReservas :reservas="reservas" @eliminar="eliminar" />
                </div>
            </div>
            <BookingForm @reserva="imprime" />
        </div>
    </div>
</template>