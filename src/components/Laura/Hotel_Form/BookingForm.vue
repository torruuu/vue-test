<script setup>
import { ref, computed, watch } from 'vue';

//Declaración de variables reactivas
const fechaEntrada = ref('');
const fechaSalida = ref('');
const huespedes = ref(1);
const habitacion = ref('');

const habitaciones = [
    { id: 1, nombre: 'Estándar', precio: 100 },
    { id: 2, nombre: 'Deluxe', precio: 180 },
    { id: 3, nombre: 'Suite', precio: 250 },
]

// Funcion para calcular numero_noches
const numeroNoches = computed(() => {
    if (!fechaEntrada.value || !fechaSalida.value) return 0
    if (fechaSalida.value <= fechaEntrada.value) return 0
    const entrada = new Date(fechaEntrada.value)
    const salida = new Date(fechaSalida.value)
    const diferencia = salida - entrada
    return diferencia / (1000 * 60 * 60 * 24)
});

// Funcion para calcular el importe total
const precioTotal = computed(() => {
    if (!habitacion.value) return 0
    if (errorFecha.value || errorHuespedes.value) return 0
    const calculo = habitacion.value * huespedes.value * numeroNoches.value;
    return calculo;
});

// VALIDACIONES
// Validacion fecha salida
const errorFecha = computed(() => {
    if (fechaSalida.value && fechaEntrada.value && fechaSalida.value <= fechaEntrada.value) {
        return 'La fecha de salida debe ser posterior a la fecha de entrada'
    }
    return null
});

//Validacion limitacion de huespedes de 1 a 4
const errorHuespedes = computed(() => {
    if (huespedes.value > 4 || huespedes.value < 1) {
        return 'Mínimo 1 huesped, y máximo 4.'
    }
    return null
})

// Emit con watch para que cuando no haya errores se emita al padre la info
const emit = defineEmits(['reserva'])

watch([fechaEntrada, fechaSalida, huespedes, habitacion], () => {
    if (!errorFecha.value && !errorHuespedes.value && habitacion.value && numeroNoches.value > 0) {
        emit('reserva', {
            fechaEntrada: fechaEntrada.value,
            fechaSalida: fechaSalida.value,
            huespedes: huespedes.value,
            habitacion: habitacion.value,
            numeroNoches: numeroNoches.value,
            precioTotal: precioTotal.value
        })
    }
})

// watch para validar las fechas
watch([fechaEntrada], () => {
    if (fechaEntrada.value >= fechaSalida.value) {
        const fecha = new Date(fechaEntrada.value);
        fecha.setDate(fecha.getDate() + 1);
        fechaSalida.value = fecha.toISOString().split('T')[0];
    }
})
watch([fechaSalida], () => {
    if (fechaSalida.value <= fechaEntrada.value) {
        const fecha = new Date(fechaSalida.value);
        fecha.setDate(fecha.getDate() - 1);
        fechaEntrada.value = fecha.toISOString().split('T')[0];
    }
})
</script>

<template>
    <div class="bg-amber-50 rounded-2xl shadow-lg w-full max-w-xl p-8">
        <form>
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <label for="fecha_entrada" class="font-bold">Check-in</label>
                    <input v-model="fechaEntrada" name="fecha_entrada" id="fecha_entrada" type="date"
                        class="border rounded-sm bg-amber-200">
                </div>
                <div class="flex flex-col">
                    <label for="fecha_salida" class="font-bold">Check-out</label>
                    <input v-model="fechaSalida" name="fecha_salida" id="fecha_salida" type="date"
                        class="border rounded-sm bg-amber-200">
                </div>
            </div>
            <div class="flex justify-between mt-4">
                <div class="flex gap-2">
                    <label for="huespedes" class="font-bold">Huespedes:</label>
                    <input v-model.number="huespedes" name="huespedes" id="huespedes" type="number"
                        class="w-12 border rounded-sm pl-2 bg-amber-200">
                </div>
                <div class="flex gap-2">
                    <label for="habitacion" class="font-bold">Habitación:</label>
                    <select v-model="habitacion" name="habitacion" id="habitacion"
                        class="w-48 border rounded-sm bg-amber-200">
                        <option value="" disabled selected>Elige tipo de habitación</option>
                        <option v-for="hab in habitaciones" :key="hab.id" :value="hab.precio">
                            {{ hab.nombre }} ({{ hab.precio }}€)
                        </option>
                    </select>
                </div>
            </div>
        </form>
        <div class="flex gap-8 mt-12">
            <span class="font-bold">Nª noches: {{ numeroNoches }}</span>
            <span class="font-bold">Total: {{ precioTotal }}€</span>
        </div>
        <div class="mt-4 space-y-1">
            <div v-if="errorFecha" class="text-red-600 text-sm">{{ errorFecha }}</div>
            <div v-if="errorHuespedes" class="text-red-600 text-sm">{{ errorHuespedes }}</div>
        </div>
    </div>
</template>