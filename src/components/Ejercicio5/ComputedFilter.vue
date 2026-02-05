<script setup>
import { ref, computed } from 'vue';


const products = [
  { id: 1, name: 'Mobile', category: 'Tech'  },
  { id: 2, name: 'Laptop', category: 'Tech' },
  { id: 2, name: 'Fridge', category: 'Home' },
  { id: 2, name: 'TV', category: 'Home' },
  { id: 3, name: 'Pizza', category: 'Food' },
  { id: 4, name: 'Salad', category: 'Food' },
]

const isButtonActive = ref(false);

const filtradoComputed = computed(() => {
  if (isButtonActive.value===true) {
    const productsFiltered = products.filter((product) => {
      if (product.category === 'Tech') {
        return product;
      }
    })
    return productsFiltered
  }
  else {
    return products
  }
})
function toogleFilter () {
  isButtonActive.value = !isButtonActive.value;
}
</script>

<template> 
  <div v-for="product of filtradoComputed" :key="product.id">
    {{ product.name + ' ' + product.category }}
  </div>
  <button @click="toogleFilter" class="bg-gray-500">Pulse aquí</button>

</template>