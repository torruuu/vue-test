<script setup>
import {ref} from "vue";

const searchText = ref("");

</script>
<template>

    <div>
        <input v-model="searchText" id="search" name="search" placeholder="Introduzca su búsqueda..." class="bg-grey-200 border-4 rounded-sm p-2">
        <button class="bg-green-200 border-4 rounded-sm p-2">Search</button>
    
    </div>


</template>