<script setup>
defineProps({
  lista: Array,
});

</script>


<template>
  <div>
    <div v-for="articulo in lista" :key="articulo.id">
      {{ articulo.nombre + - + articulo.precio }}
    </div>
  </div>
</template>