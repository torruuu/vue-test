<script setup>
import {ref} from "vue";

const searchText = ref("");

const emit = defineEmits(['add']);


function busqueda () {
  emit ('add', searchText.value);}

</script>
<template>

    <div>
        <input v-model="searchText" type="text" id="search" name="search" placeholder="Introduzca su búsqueda..." class="bg-grey-200 border-4 rounded-sm p-2">
        <button @click="busqueda" class="bg-green-200 border-4 rounded-sm p-2">Search</button>
    
    </div>


</template>