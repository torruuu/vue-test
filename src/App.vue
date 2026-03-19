<script setup>
import CarritoShop from '@/components/Juanal/RouterShop/components/CarritoShop.vue';
import FavoritosBoton from '@/components/Juanal/RouterShop/components/FavoritosBoton.vue';
import CreateBoton from './components/Juanal/RouterShop/components/CreateBoton.vue';
//import { Toaster } from 'vue-sonner'

</script>

<template>
    <FavoritosBoton />
    <CarritoShop />
    <CreateBoton />
    <RouterView />


</template>

<style scoped></style>
