<script setup>
import { computed, ref } from "vue"
import Hijo2Comp from "./Hijo2Comp.vue";
import AddTask from "./AddTask2.vue"
import SearchTask from "./SearchTask2.vue";

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

const searchText = ref("");

const tareasIguales = computed(() => {
    const tareasIguales = [];
    if(searchText.value === "") {
        return [];
    }

    for (let tarea of tareas.value){
        if(tarea.title.toLowerCase().includes(searchText.value.toLowerCase().trim())) {
            tareasIguales.push(tarea)
        }
        
    }
    if(tareasIguales.length === 0) {
        alert("No existen coincidencias.")
    }
    return tareasIguales;
})

function buscar (t) {
    searchText.value = t;
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
    if(tareas.value.length < contadorLimite.value) {
    tareas.value.push({
        id: Date.now(),
        title,
        done: false})}
    else {
        return alert("Has llegado al límite de tareas.")
    }
    }

//Contador que permita modificar el limite que hemos establecido anteriormente. Si pulso y bajo a 9, eso tiene que modificar el add. tarea anterior para solo permitirme nueve.
const contadorLimite = ref(5);
const limit = 50;




function sumar () {
    if(contadorLimite.value !== limit) {
        contadorLimite.value++;
    } 
    else {
        
        return alert("Has llegado al limite.")
    }}

function restar () {
    if(tareas.value.length === contadorLimite.value) {
        return
    }
    if(contadorLimite.value === 0){
        return alert("No podemos bajar más el contador.")
    }
    else{
        contadorLimite.value--;
    }}


</script>

<template>
    <div  class="flex flex-col min-h-screen gap-6 p-6">

    <div>
        <div>
            <h1>Contador Limite</h1>
            <button @click="restar" class="bg-red-200 rounded p-2">-</button>
            <span>{{ contadorLimite }}</span>
            <button @click="sumar" class="bg-green-200 rounded p-2">+</button>
        </div>


    <div v-if="tareasIguales.length !== 0">
        {{ tareasIguales }}
    </div>
    <div v-else>
        
        <h1>Barra de búsqueda</h1>
            <SearchTask @add="buscar"/>
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
    </div>
    

    
    
    
</template>
