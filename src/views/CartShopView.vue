<script setup>
import { useCartStore } from '@/stores/cartStore';
import { CircleX, Undo2 } from 'lucide-vue-next';
import { useTotalStore } from '@/stores/totalStore';
import { storeToRefs } from 'pinia';
import ProductList from '@/components/Laura/Clothes_Shop/ProductList.vue';
const datos = useCartStore()
const { total } = storeToRefs(useTotalStore())


//Funcion eliminar producto del carro
function eliminar(productoID) {
    console.log('eliminando:', productoID)
    datos.removeProduct(productoID)

}

</script>


<template>
    <div>
        <div class="ml-12 mb-10">
            <router-link to="/clothes">
                <div class="w-12 h-12 flex items-center justify-center
                bg-white/30 backdrop-blur-md
                rounded-full shadow-lg
                hover:bg-white/40 transition">
                    <Undo2 size="28" class="text-black" />
                </div>
            </router-link>
            <div class="max-w-2xl mx-auto">
                <ProductList :lista="datos.cart">
                    <template #default="{ producto }">
                        <button @click="eliminar(producto.id)">
                            <CircleX class="fill-red-200" />
                        </button>
                    </template>
                </ProductList>
                <span class="flex justify-end mt-4 font-bold text-lg mr-2">
                    Total: {{ total }} €
                </span>
            </div>
        </div>
    </div>
</template>
