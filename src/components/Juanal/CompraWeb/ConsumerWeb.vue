<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';

const products = [
  {id:1, name:"IPhone 16 256GB", price: 699, imagen:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdgCiy-QaTHYABfkf_TKrfQf1SYBl1Fqv26EhNIF45e-2druDcg_6X-lReMHvBwyjLaTP8lXlcNMIg7I1FJBIDrkqGww7-tmEEEYag7xfQXkHB6M17hx765N46NdMBUuhXBK2FVkY&usqp=CAc"},
  {id:2, name:"PlayStation 5 Slim", price: 550, imagen:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKQU4pddxAKmT12t3OZZ9CbGNQZ2j8FDAotoVNnmXIfRxJpdUtUJzJo_ytjd2PPDhjPdxM3TnzQdhEVEMeu39K7YB1mzb7ZNYlk07ZjxAiJSy-_6XEPl8WCRZUdpE0e11_RtaqpLY&usqp=CAc"},
  {id:3, name:"Muñeca Rapunzel", price: 45, imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwRWT4Qll2v9ncNYza6xao_fuD61hfF4t_9KwyH2W9fMosgKL9lbcKGieU7WKGUQm2-z_jLfdTTr1kELr-jPS0j7JB9b0g6Rj4biXUGsE9FrnSPCg0f7YkzRPKvaHAsmOxAAKrKw&usqp=CAc"}
]

const finalProducts = ref([]);
function add(id) {
  const product = products.find(p => p.id === id)
  if (product) {
    finalProducts.value.push(product)
  }
}
//const precioTotal = ref();


/*const calculoTotal = computed(() => {
    for (let i=0; i<finalProducts.value.length; i++){
        precioTotal.value += finalProducts.value[i].price;

return precioTotal.value}})*/

    
// Recorrer el array, suma precio para calcular el total.
</script>
<template>
<div class="flex items-center justify-between text-center">
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :id="product.id"
    :name="product.name"
    :price="product.price"
    :imagen="product.imagen"
    @add-product="add"
  />
</div>
<span>
    <h1 class="font-sans font-lg font-medium">Carro de la compra:</h1>
</span>
<div class="flex justify-center items-center flex-col">
<div 
v-for="producto in finalProducts"
:key="producto.id" class="bg-red-200 border rounded flex items-center justify-center w-md">
    {{ producto.name }} {{ producto.price }}   
</div>
</div>
    




</template>