<script setup>
import {ref, computed} from "vue";

const props = defineProps({
  limit: Number
})
const emit = defineEmits(['limitao'])

const contador =ref(0);
const mensaje = computed(() => {
  
  if (contador.value < props.limit-2) {
    return "Fuera del limite."
  }
  else if (contador.value===props.limit-1) {
    return "Te queda uno para el limite."
  }
  else {
    return "Has llegado al limite."
  }

});


function restar(){
  contador.value--;
}

function sumar(){
  if (contador.value < props.limit){
    contador.value++
    if(contador.value === props.limit) emit('limitao')
  }
  
    
}

</script>
<template>
  <div>
    <button @click="restar" class="bg-red-400 rounded p-2">-</button>
    <span>
      {{ contador }}
    </span>
    <button @click="sumar" class="bg-green-400 rounded p-2">+</button>
    <span> {{ mensaje }}</span>



  </div>



</template>