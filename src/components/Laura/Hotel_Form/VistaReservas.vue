<script setup>
const props = defineProps({
    reservas: Array
});

const emit = defineEmits(['eliminar']);

function eliminar(id) {
    emit('eliminar', id);
};

</script>
<template>
    <div class="flex flex-col w-44">
        <h2 class="font-bold text-lg mb-2 text-white">Mis reservas:</h2>
        <div v-for="reserva in props.reservas" :key="reserva.id"
            class="relative bg-amber-50 rounded-2xl shadow-lg p-2 mb-2 border">
            <button @click="eliminar(reserva.id)" class="absolute top-2 right-2 pr-2">❌</button>
            <h2 class="font-bold mb-2">Reserva: {{ reserva.id }}</h2>
            <p>Entrada: {{ reserva.fechaEntrada }}</p>
            <p>Salida: {{ reserva.fechaSalida }}</p>
            <p>Huéspedes: {{ reserva.huespedes }}</p>
            <p>Noches: {{ reserva.numeroNoches }}</p>
            <p>Total: {{ reserva.precioTotal }}€</p>
        </div>
    </div>
</template>