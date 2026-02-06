<script setup>
import { ref } from 'vue';
import HijoCartas from './HijoCartas.vue';
import HijoCarro from './HijoCarro.vue';



const productos = [
    { id: 1, nombre: "iPhone", precio: 899 },
    { id: 2, nombre: "Mac", precio: 1299 },
    { id: 3, nombre: "Watch", precio: 399 },
    { id: 4, nombre: "iPad", precio: 450 }
];

let listaCarro = ref([]);
let carroVacio = ref(true);


function carroEstado() {
    if (listaCarro.value.length === 0) {
        carroVacio.value = true;
        console.log("carro vacio");
    } else {
        carroVacio.value = false;
        console.log("carro lleno");
        return listaCarro.value;
    }
}
// Si la cantidad del producto es 0 crea el nuevo producto y sino suma una cantidad
// Spread operator

function añadir(producto) {
    listaCarro.value.push(producto)
}

</script>
<template>
    <div>
        <div class="flex flex-col items-end bg-gray-200 w-full">
            <button @click="carroEstado" class="pr-2">
                🛒 {{ listaCarro.length }}
            </button>
            <span v-if="!carroVacio" >
                <HijoCarro :lista="listaCarro" class="flex flex-col items-end pr-2"/>
            </span>

        </div>
        <div class="min-h-screen flex items-center justify-center">
            <div class="grid grid-cols-2 gap-6">
                <HijoCartas v-for="producto in productos" :key="producto.id" :id="producto.id" :nombre="producto.nombre"
                    :precio="producto.precio" @añadir="añadir" />
            </div>
        </div>
    </div>

</template>