<script setup>
import { ref, computed } from 'vue';

//Declaración de variables reactivas
const fecha_entrada = ref('');
const fecha_salida = ref('');
const huespedes = ref(1);
const habitacion = ref('');

// Funcion para calcular numero_noches
const numeroNoches = computed(() => {
    if (!fecha_entrada.value || !fecha_salida.value) return 0
    const entrada = new Date(fecha_entrada.value)
    const salida = new Date(fecha_salida.value)
    const diferencia = salida - entrada
    return diferencia / (1000 * 60 * 60 * 24)
});

// Funcion para calcular el importe total
const precioTotal = computed(() => {
    if (!habitacion.value) return 0
    const calculo = habitacion.value * huespedes.value * numeroNoches.value;
    return calculo;
});

// VALIDACIONES
// Validacion fecha salida
const errorFecha = computed(() => {
    if (fecha_salida.value && fecha_entrada.value && fecha_salida.value <= fecha_entrada.value) {
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


</script>

<template>
    <div class="min-h-screen flex justify-center items-center bg-gray-700">
        <div class="bg-amber-50 rounded-2xl shadow-lg w-full max-w-xl p-8">
            <form>
                <div class="flex justify-between">
                    <div class="flex flex-col">
                        <label for="fecha_entrada">Check-in</label>
                        <input v-model="fecha_entrada" name="fecha_entrada" id="fecha_entrada" type="date"
                            class="border rounded-sm">
                    </div>
                    <div class="flex flex-col">
                        <label for="fecha_salida">Check-out</label>
                        <input v-model="fecha_salida" name="fecha_salida" id="fecha_salida" type="date"
                            class="border rounded-sm">
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="flex gap-2">
                        <label for="huespedes">Huespedes:</label>
                        <input v-model.number="huespedes" name="huespedes" id="huespedes" type="number"
                            class="w-12 border rounded-sm pl-2">
                    </div>
                    <div class="flex gap-2">
                        <label for="habitacion">Habitación:</label>
                        <select v-model="habitacion" name="habitacion" id="habitacion" class="w-36 border rounded-sm">
                            <option value="100">Estandar (100€)</option>
                            <option value="180">Deluxe (180€)</option>
                            <option value="250">Suite (250€)</option>
                        </select>
                    </div>
                </div>
            </form>
            <div class="flex gap-8 mt-12">
                <span>Nª noches: {{ numeroNoches }}</span>
                <span>Total: {{ precioTotal }}€</span>
            </div>
            <div class="mt-4 space-y-1">
                <div v-if="errorFecha" class="text-red-600 text-sm">{{ errorFecha }}</div>
                <div v-if="errorHuespedes" class="text-red-600 text-sm">{{ errorHuespedes }}</div>
            </div>
        </div>
    </div>
</template>