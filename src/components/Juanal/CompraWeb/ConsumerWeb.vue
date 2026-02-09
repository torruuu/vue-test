<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';
import CarroCompra from './CarroCompra.vue';

const products = ref([
  {id:1, name:"IPhone 16 256GB", price: 699, imagen:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdgCiy-QaTHYABfkf_TKrfQf1SYBl1Fqv26EhNIF45e-2druDcg_6X-lReMHvBwyjLaTP8lXlcNMIg7I1FJBIDrkqGww7-tmEEEYag7xfQXkHB6M17hx765N46NdMBUuhXBK2FVkY&usqp=CAc"},
  {id:2, name:"PlayStation 5 Slim", price: 550, imagen:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKQU4pddxAKmT12t3OZZ9CbGNQZ2j8FDAotoVNnmXIfRxJpdUtUJzJo_ytjd2PPDhjPdxM3TnzQdhEVEMeu39K7YB1mzb7ZNYlk07ZjxAiJSy-_6XEPl8WCRZUdpE0e11_RtaqpLY&usqp=CAc"},
  {id:3, name:"Muñeca Rapunzel", price: 45, imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwRWT4Qll2v9ncNYza6xao_fuD61hfF4t_9KwyH2W9fMosgKL9lbcKGieU7WKGUQm2-z_jLfdTTr1kELr-jPS0j7JB9b0g6Rj4biXUGsE9FrnSPCg0f7YkzRPKvaHAsmOxAAKrKw&usqp=CAc"}
])

const finalProducts = ref([]);



function add(id) {
  const product = products.value.find(p => p.id === id)
  if (!product) return

  
  const productoEnCarro = finalProducts.value.find(p => p.id === id)

  if (productoEnCarro) {
    productoEnCarro.cantidad++
  } else {
    finalProducts.value.push({
      ...product,
      cantidad: 1
    })
  }
}

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
<CarroCompra :Carro="finalProducts" />
    




</template>