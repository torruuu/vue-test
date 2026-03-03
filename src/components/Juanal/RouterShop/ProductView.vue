<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Heart } from 'lucide-vue-next'

const route = useRoute()
const liked = ref(false)

const products = [
  { id: 1, title: "Mens Casual Slim Fit", price: 15.99, description: "Camiseta manga larga hombre. Blanca, mangas negras.", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGkjgIPytlMHs3hGMsHn19mA83mVydVjavv3AEhI93Nexwk17hX8lFysWb4i4JhsRFc99Z9CPFsaCJBdpYShehpFV449_u5RzVs0gF_REDNPc8BI5uqnSh9BwJjQfTwLJKSYJ3dBxgOA&usqp=CAc", rating: { rate: 2.1, count: 430 } },
  { id: 2, title: "NIKE Air Jordan 1", price: 375, description: "Zapatilla deportiva AIR JORDAN clásica. Roja, blanca y negra.", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...", rating: { rate: 8.75, count: 780 } },
  { id: 3, title: "Camiseta Real Madrid Tercera Equipacion", price: 150, description: "Tercera equipacion Real Madrid CF. Color azul.", image: "https://shop.realmadrid.com/cdn/shop/files/RMCFMZ09181__20_1.webp?v=1767816278", rating: { rate: 10, count: 1500 } },
  { id: 4, title: "Camiseta Son Goku ramen", price: 15.95, description: "Camiseta freak Dragon Ball. Son Goku-ramen.", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREmTmVNP3U70yPa2N6HxFumFMSlNZy7DVY2UtouPXVzq-KbQ1qitAv6wHbWuOu0Js_SKLVbLa1Z_663_LeW0sy-mwnQOwa-6O5tmRcE4_1OisRYwZ9VuOlvZG4UQMmQA&usqp=CAc", rating: { rate: 7.2, count: 430 } },
  { id: 5, title: "Adidas Originals Firebird", price: 75, description: "Sudadera ADIDAS, clásica. Negra.", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAROrxG2rPtd5f_ner1iCT5mnb35Gwisu2Rcs4IO_o9wXP45SSzMmiTSfQdE0hpqFKwzLYKmuK9wDkR-GU3828EXYUsODVWe79TXo-sMyD50kgUHKR7I8QRRDrt6yevMyeeHdE_Q&usqp=CAc", rating: { rate: 7.1, count: 785 } },
]

// Busca el producto por el :id de la URL
const product = computed(() =>
  products.find(p => p.id === Number(route.params.id))
)
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-10">

    <div v-if="product" class="bg-white rounded-2xl shadow-lg p-10 flex gap-10 max-w-3xl w-full">

      <div class="w-72 h-72 flex items-center justify-center overflow-hidden">
        <img :src="product.image" :alt="product.title" class="max-w-full max-h-full object-contain">
      </div>

      <div class="flex flex-col justify-center gap-4 flex-1">
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <p class="text-gray-500">{{ product.description }}</p>
        <div class="text-3xl font-bold text-green-600">{{ product.price }} €</div>


        <div class="text-sm text-gray-400">
          {{ product.rating.rate }}
          <span class="ml-1">({{ product.rating.count }} valoraciones)</span>
        </div>
        <div class="flex gap-4 mt-4">
          <button class="flex items-center gap-2 bg-black text-white rounded-xl px-6 py-3">
            Añadir
          </button>

          <button>
            <Heart :size="20" :fill="liked ? 'currentColor' : 'none'" />
          </button>

        </div>
      </div>

    </div>
  </div>

</template>