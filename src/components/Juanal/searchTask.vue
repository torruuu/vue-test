<script setup>
import {ref, computed} from "vue";
/*const props = defineProps ({
    tareas : Array
})*/


/*const tareasTerminadas=ref([]);
const tareasPendientes=ref([]);*/


const searchText = ref("");

const tareasTerminadas = computed(() => {
    return tareas.value.filter(t => t.done);
});



/*{if (t.done === true) {
    searchText.value=tareasTerminadas.value;
}
else {
    searchText.value="";}})});
    
/*const tareasTerminadas = computed(() => {
    return tareas.value.filter(t => t.done === true);
});

const searchText = ref("");

function actualizarSearchText() {
    searchText.value = tareasTerminadas.value.map(t => t.title).join(", ");*/
</script>
<template>

    <div>
        <input v-model="searchText" id="search" name="search" placeholder="Introduzca su búsqueda..." class="bg-grey-200 border-4 rounded-sm p-2">
        <button class="bg-green-200 border-4 rounded-sm p-2">Search</button>
    
    </div>


</template>