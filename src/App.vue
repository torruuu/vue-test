<script setup>
import CarritoShop from '@/components/Juanal/RouterShop/components/CarritoShop.vue';
import FavoritosBoton from '@/components/Juanal/RouterShop/components/FavoritosBoton.vue';
import CreateBoton from './components/Juanal/RouterShop/components/CreateBoton.vue';
import { Toaster } from 'vue-sonner'
import CambioIdioma from './components/Juanal/RouterShop/components/CambioIdioma.vue';

</script>

<template>
    <Toaster richColors position="bottom-center" :toastOptions="{ style: { background: '#1e293b',
      color: '#fff',
      border: '1px solid #334155' }}"/>
    <FavoritosBoton />
    <CarritoShop />
    <CreateBoton />
    <CambioIdioma />
    <RouterView />


</template>

<style scoped></style>
