<script setup>
import ProductCardShop from './ProductCardShop.vue'
import { products } from './products.js'

</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCardShop
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :price="product.price"
          :description="product.description"
          :image="product.image"
          :rating="product.rating"
        />
      </div>
    </div>

  </div>
</template>
    