<script setup>
const props = defineProps({
  reserva: Object,
  index: Number,
  id: Number
})
const emit = defineEmits(['eliminarReserva'])

function eliminar () {
    emit('eliminarReserva', props.id);
}
</script>
<template>
<div v-if="reserva" class="font-mono mt-6 text-center">
    <p class="font-mono text-lg">Mis reservas:</p>
        <p>Check-in: {{ props.reserva.entrada }}</p>
        <p>Check-out: {{ props.reserva.salida }}</p>
        <p>Huéspedes: {{ props.reserva.huespedes }}</p>
        <p>Habitación: {{ props.reserva.habitacion }}</p>
        <p>Noches: {{ props.reserva.noches }}</p>
        <p>Precio total: {{ props.reserva.precio }} €</p>
        <button @click="eliminar" class="bg-red-500 border-4 rounded-sm p-2">Eliminar</button>

</div>
</template>