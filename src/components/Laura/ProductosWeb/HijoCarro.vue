<script setup>
defineProps({
  lista: Array,
  totalImporte: Number
})

</script>

<template>
  <div>
    <div v-for="articulo in lista" :key="articulo.id">
      {{ articulo.nombre }} –
      {{ articulo.precio }} € –
      {{ articulo.unidades }} u
    </div>
    <div class="font-bold mt-2">
      Total: {{ totalImporte }}€
    </div>
  </div>
</template>