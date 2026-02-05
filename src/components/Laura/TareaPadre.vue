<script setup>
import TareaHijo from "./TareaHijo.vue"
import TareaHija from "./TareaHija.vue"
import TareaBuscador from "./TareaBuscador.vue"
import { computed, ref } from "vue"

const tareas = ref([
    { id: 1, nombre: "Lavar los platos", estado: false },
    { id: 2, nombre: "Terminar los ejercicios de Vue", estado: false },
    { id: 3, nombre: "Hacer la compra", estado: false },
])

const contadorTarea = computed(() => tareas.value.length)
let limit = ref(10);

const tareaBuscada = ref("");
const tareasTerminadas = computed(recuperarCompl);
const tareasPendientes = computed(recuperarPend);
const tareasCoincidenComputed = computed(() => {
    const tareasCo = [];
    if (tareaBuscada.value === "") {
        return tareasCo;
    }
    for (let tarea of tareas.value) {
        if (tarea.nombre.includes(tareaBuscada.value)) {
            tareasCo.push(tarea.nombre)
        }
    } return tareasCo
});

function buscar(inputTarea) {
    tareaBuscada.value = inputTarea;
}

function recuperarPend() {
    const tareasPend = [];
    for (let tarea of tareas.value) {
        if (!tarea.estado) {
            tareasPend.push(tarea)
        }
    }
    return tareasPend
}

function recuperarCompl() {
    const tareasCompl = [];
    for (let tarea of tareas.value) {
        if (tarea.estado) {
            tareasCompl.push(tarea)
        }
    }
    return tareasCompl
}

//Declaro la funcion borrar tarea
function eliminarTarea(id) {
    tareas.value = tareas.value.filter(tarea => tarea.id !== id)
}
//Declaro la funcion agregar tarea que añade el valor del input en el array
function agregarTarea(nombreTarea) {
    if (limit.value > contadorTarea.value) {
        tareas.value.push({
            id: Date.now(),
            nombre: nombreTarea,
            estado: false
        })
    } else { alert(`No puedes añadir más de ${limit.value} tareas.`) }
}

function sumar() {
    limit.value++
}

function restar() {
    limit.value--
}
//Declaro la funcion marcar que escucha el evento personalizado
function marcar(id) {
    // Buscar en el array la tarea que tenga el mismo id
    const tarea = tareas.value.find((t) => t.id === id)
    // Si encontró la tarea, invertir su estado (true ↔ false)
    if (tarea) {
        tarea.estado = !tarea.estado
        if (tarea.estado === false) {
            console.log("Pendiente")
        } else {
            console.log("Completada")
        }
    }
}
</script>

<template>
    <div class="flex flex-col items-center gap-4 mt-22">
        <ul>
            <TareaBuscador @buscar-tarea="buscar" />
        </ul>
        <span v-if="tareasCoincidenComputed.length > 0">{{ tareasCoincidenComputed }}</span>
        <div v-else>
            <TareaHija @agregar-tarea="agregarTarea" />
            <h2 class="flex flex-col items-center mt-0.5">Limite de tareas</h2>
            <div class="flex justify-center mt-0.5">
                <button @click="restar" class="bg-purple-400 px-3 border rounded-l-lg">-</button>
                <span class="bg-gray-300 px-3 py-1 border">{{ limit }}</span>
                <button @click="sumar" class="bg-purple-400 px-3 border rounded-r-lg">+</button>
            </div>
            <h2 class="mb-10 mt-6 text-xl underline">Lista de tareas:</h2>
            <ul v-for="tarea in tareasPendientes" :key="tarea.id">
                <TareaHijo :id="tarea.id" :nombre="tarea.nombre" :estado="tarea.estado" @marcar="marcar"
                    @borrado="eliminarTarea" />
            </ul>
            <h2 class="mt-6 text-xl underline">Tareas completadas:</h2>
            <ul v-for="tarea in tareasTerminadas" :key="tarea.id">
                <TareaHijo :id="tarea.id" :nombre="tarea.nombre" :estado="tarea.estado" @borrado="eliminarTarea" />
            </ul>
        </div>
    </div>
</template>
