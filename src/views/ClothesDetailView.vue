<script setup>
import { useRoute } from 'vue-router'
import { productos } from '@/data/productos.js'
import { Heart } from 'lucide-vue-next'
import { Star } from 'lucide-vue-next'

const route = useRoute()
const producto = productos.find(p => p.id === Number(route.params.id))

</script>

<template>
    <div class="grid grid-cols-2 mt-32 ml-22">
        <div>
            <img :src="producto.imagen" :alt="producto.nombre">
        </div>
        <div class="flex flex-col mt-22 w-72">
            <div class="mt-4 font-bold text-2xl">
                {{ producto.nombre }}
            </div>
            <div class="mt-4 text-xl">
                {{ producto.descripcion }}
            </div>
            <div class="mt-4 text-xl">
                <div class="flex gap-1">
                    <Star v-for="estrella in 5" :key="estrella"
                        :class="estrella <= producto.rating.rate ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 fill-gray-300'" />
                    ({{ producto.rating.count }})
                </div>
            </div>
            <div class="flex mt-4 gap-4">
                <button class="border rounded-xl bg-green-200 p-2 px-14 ">
                    AÑADIR
                </button>
                <button class="border rounded-full p-4">
                    <Heart class="text-red-500 fill-red-500" />
                </button>
            </div>
        </div>
    </div>
</template>