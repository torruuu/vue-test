<script setup>

import HijoComp from './HijoComp.vue';

const tareas = [
    { id: 1, title: "Comer", estado: true},
    { id: 2, title: "Dormir", estado: false}]

const tareasPendientes = [];
const tareasTerminadas = [];


 function addTarea () {
        if(tareas.estado===true) {
            tareasPendientes.push
        }
        else {tareasTerminadas.push}
    }

    






</script>
<template>
    <div>
    <HijoComp :tareasPendientes="tareasPendientes" :tareasTerminadas="tareasTerminadas"/>
        
    



    </div>



</template>