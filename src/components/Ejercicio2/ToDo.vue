<script setup>
import { ref } from "vue"

const nota = ref("");
const lista = ref([]);

function add () {
  lista.value.push(nota.value);
  nota.value = "";
}

function deleteItem (itemIndex) {
  // ['test', 'gato', 'dormir']
  lista.value.splice(itemIndex, 1)
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
    <form @submit.prevent="add" class="flex gap-2 mb-3">
      <input v-model="nota" id="input" placeholder="Escribe aquí" class="bg-gray-300">
      <button id="btn" class="bg-green-500 p-2">Add</button>
    </form>
    <span>
      <ul v-if="lista.length > 0" class="rounded-lg bg-gray-300 p-4 px-6 border flex-col flex items-center gap-2">
        <div v-for="(item, index) in lista" class="flex gap-2 rounded-lg bg-gray-400 p-2 border w-xs items-center justify-between" :key="index">
          <li>{{ `${index} - ${item}` }}.</li>
          <button class="bg-red-700 p-2 py-1 font-semibold rounded-full" @click="() => deleteItem(index)" id="btn2">X</button>
        </div>
      </ul>
      <p v-else>Lista vacia.</p>
    </span>
  </div>
</template>