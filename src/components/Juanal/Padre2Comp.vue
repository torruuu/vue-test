<script setup>
import { computed, ref } from "vue"
import Hijo2Comp from "./Hijo2Comp.vue";
import AddTask from "./AddTask.vue"
import SearchTask from "./SearchTask.vue";

const tareas = ref([
    { id: 1, title: "Comer", done: true },
    { id: 2, title: "Dormir", done: false },
    { id: 3, title: "Estudiar", done: true }
])

const tareasPendientes = computed(getUndoneTask);
const tareasTerminadas = computed(getDoneTasks);

function getDoneTasks () {
    const tareasTerminadas = []
    for (let tarea of tareas.value) {
        if(tarea.done===true) {
             tareasTerminadas.push(tarea);
        }
    }
    return tareasTerminadas;
}

function getUndoneTask () {
    const tareasPendientes =[];
    for (let tarea of tareas.value) {
        if(tarea.done===false) {
             tareasPendientes.push(tarea);
        }
    }
    return tareasPendientes;
}
// VARIABLE EN EL INPUT. FUNCION COINCIDENCIA QUE RECORRE EL ARRAY TAREAS Y SI COINCIDE EL TITULO CON EL VALOR DEL INPUT (AL PULSAR BOTON)
//ME LO METES EN UN ARRAY QUE SE LLAMA TAREAS IGUALES.
//LUEGO QUIERO MODIFICAR TEMPLATE Y QUE ME MUESTRE ESE ARRAY SI LA FUNCION COINCIDENCIA SE CUMPLE Y SI NO QUE ME DEJE LO QUE TIENE Y ME SALTE UN ALERT CON MENSAJE.
const searchText = ref("");
const tareasIguales = computed(coincidencia);
const busqueda = ref(false);

function coincidencia () {
    const tareasIguales = [];
    for (let tarea of tareas.value){
        if(tarea.title===searchText.value) {
            tareasIguales.push(tarea)
        }
    }
    return tareasIguales;
}
function buscar () {
    busqueda.value = true;
    tareasIguales.value = tareas.value.filter (
        tarea => tarea.title === searchText.value
    )
}
/* CREAMOS SEARCHTEXT REACTIVA, CAPTURADA EN TEMPLATE PARA QUE LO PINTE EL INPUT, CREAMOS FUNCION REACTIVA COINCIDENCIA
QUE ME RECORRE EL ARRAY PRINCIPAL TAREAS Y SI COINCIDE EL NOMBRE DE ALGUNA DE LAS TAREAS CON LA BARRA DE BUSQUEDA LO ALMACENA
EN EL ARRAY tareasIGUALES. LUEGO CREO UNA FUCION BUSCAR-ASOCIADA AL CLICK DEL BOTON. ESTA FUNCION COMPARA EL ARRAY, CAPTA SI....*/
function eliminarTarea(id) {
    tareas.value = tareas.value.filter(tarea => tarea.id !== id);
}

function enviar(id) {
    const tarea = tareas.value.find(t => t.id === id)
    if (!tarea) return
    tarea.done = !tarea.done

}
function add(title) {
    tareas.value.push({
        id: Date.now(),
        title,
        done: false
    })
}

</script>

<template>
    <div  class="flex flex-col min-h-screen gap-6 p-6">
    <div>

        <h1>Barra de búsqueda</h1>
            <searchTask v-model="searchText" @click="buscar"/>
        <h1>Añade nueva tarea:</h1>

        <AddTask @add-tarea="add" />

        <h1>Tareas pendientes</h1>

        <div v-for="tarea in tareasPendientes" :key="tarea.id">
            <Hijo2Comp :id="tarea.id" :title="tarea.title" :done="tarea.done" @enviar="enviar"
                @borrar="eliminarTarea" />
        </div>
        <h1>Tareas completadas</h1>
        <div v-for="tarea in tareasTerminadas" :key="tarea.id">
            <Hijo2Comp :id="tarea.id" :title="tarea.title" :done="tarea.done"
                @borrar="eliminarTarea" />
        </div>

    </div>
    </div>
    

    
    
    
</template>
