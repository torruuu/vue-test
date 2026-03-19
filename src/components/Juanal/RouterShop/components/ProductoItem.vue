<script setup>
defineProps({
  product: Object
})
//CREAMOS COMPONENTE PARA UTIIZAR SLOTS. ESTO LO RECUPERAMOS EN LAS VISTAS NECESARIAS Y EN ESE HUECO/SLOT PONEMOS LOS BOTONES NECESARIOS.
</script>

<template>
  <li class="flex items-center justify-between border rounded-xl p-4 shadow-sm gap-4">
    <img src="https://placehold.co/48x48?text=IMG" :alt="product.name" class="w-12 h-12 object-contain" />
    <div class="flex-1">
      <p class="font-semibold">{{ product.name }}</p>
      <p class="text-sm text-gray-400">{{ parseFloat(product.price).toFixed(2) }} €</p>
    </div>
    <slot name="acciones" />
  </li>
</template>