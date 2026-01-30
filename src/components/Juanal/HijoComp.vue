<script setup>
const props = defineProps({
    tareas: Array
    
})










</script>
<template>
    <div>
        <h1>Tareas Pendientes</h1>

        <span v-for="i in tareasPendientes" :key="i.id" :title="i.title">

             {{ i.title }}

       </span>

            <button class="font-serif text-base bg-green-400 rounded-xl"> AÑADIR</button>
            <button class="font-serif text-base bg-red-400 rounded-xl"> ELIMINAR</button>

    
  <h1 class="justify-center items-center">Tareas Completadas</h1>
        
      
        <span v-for="i in tareasTerminadas" :key="i.id" :title="i.title" class="w-full space-y-2 justify-items-end">
                {{ i.title }}
        </span>   

        <button class="flex font-serif text-base bg-red-400 rounded-xl"> ELIMINAR</button>


        

    </div>





</template>
