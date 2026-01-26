<script setup>
import { ref } from "vue"

const nota = ref("");
const lista = ref([]);

function add () {
  
  lista.value.push(nota.value);
  console.log(lista);
  

}

// if (lista.length > 0) {
//   pinta lista
// } else {
//   Lista vacia
// }

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h1>To do list</h1>
    <form @submit.prevent="add" class="flex gap-2">
      <input v-model="nota" id="input" placeholder="Escribe aquí" class="bg-gray-300">
      <button id="btn" class="bg-green-500 p-2">Add</button>
    </form>
    <span>
      <ul v-if="lista.length > 0" class="list-disc">
        <li v-for="(item, index) in lista" :key="index">{{ `${index} - ${item}` }}.</li>
      </ul>
      <p v-else>Lista vacia.</p>
    </span>
  </div>
</template>