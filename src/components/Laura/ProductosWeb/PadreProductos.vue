<script setup>
import { ref, computed } from 'vue';
import HijoCartas from './HijoCartas.vue';
import HijoCarro from './HijoCarro.vue';



const productos = [
    { id: 1, nombre: "iPhone", precio: 899, imagen: "https://dam.elcorteingles.es/producto/www-001094612500390-00.jpg?impolicy=Resize&width=1200&height=1200" },
    { id: 2, nombre: "Mac", precio: 1299, imagen: "https://dam.elcorteingles.es/producto/www-001015215426097-00.jpg?impolicy=Resize&width=1200&height=1200" },
    { id: 3, nombre: "Watch", precio: 399, imagen: "https://dam.elcorteingles.es/producto/www-001094611403984-00.jpg?impolicy=Resize&width=1200&height=1200" },
    { id: 4, nombre: "iPad", precio: 450, imagen: "https://dam.elcorteingles.es/producto/www-001015217012853-00.jpg?impolicy=Resize&width=1200&height=1200" }
];

let listaCarro = ref([]);
let carroVacio = ref(true);

//  Calcula el total de unidades
const totalUnidades = computed(() => {
    let suma = 0;
    for (let producto of listaCarro.value) {
        suma = suma + producto.unidades;
    }
    return suma;
});

// Calcula el total del importe
const totalImporte = computed(() => {
    let suma = 0;
    for (let producto of listaCarro.value) {
        suma = suma + (producto.precio * producto.unidades);
    }
    return suma;
});

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
    const index = listaCarro.value.findIndex(
        item => item.id === producto.id
    )

    if (index === -1) {
        listaCarro.value = [
            ...listaCarro.value,
            { ...producto, unidades: 1 }
        ]
    } else {
        listaCarro.value = listaCarro.value.map((item, i) =>
            i === index
                ? { ...item, unidades: item.unidades + 1 }
                : item
        )
    }
}

</script>
<template>
    <div>
        <div class="flex flex-col items-end bg-gray-200 w-full">
            <button @click="carroEstado" class="mt-2 pr-2">
                🛒 {{ totalUnidades }}
            </button>
            <br>
            <span v-if="!carroVacio">
                <HijoCarro :lista="listaCarro" :totalImporte="totalImporte" class="flex flex-col items-end pr-2 mb-2" />
            </span>

        </div>
        <div class="min-h-screen flex items-center justify-center">
            <div class="grid grid-cols-2 gap-6">
                <HijoCartas v-for="producto in productos" :key="producto.id" :id="producto.id" :nombre="producto.nombre"
                    :precio="producto.precio" :imagen="producto.imagen" @añadir="añadir" />
            </div>
        </div>
    </div>

</template>