<script setup>
defineProps({ modelValue: Boolean })

const emit = defineEmits(['update:modelValue', 'confirmar', 'cancelar'])

function Confirmar() {
    emit('confirmar')
    emit('update:modelValue', false)
}

function Cancelar() {
    emit('cancelar')
    emit('update:modelValue', false)
}
</script>

<template>
  <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4 text-center">

      <p class="text-gray-800 font-medium mb-6">
        Ya existe una reserva para las fechas seleccionadas. ¿Desea añadirla de todos modos?
      </p>

      <div class="flex gap-3 justify-center">
        <button
          class="px-5 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700"
          @click="Cancelar"
        >
          Cancelar
        </button>
        <button
          class="px-5 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-white"
          @click="Confirmar"
        >
          Sí, añadir
        </button>
      </div>

    </div>
  </div>
</template>

