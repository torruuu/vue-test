<script setup>
import CartShop from './components/Laura/Clothes_Shop/CartShop.vue';
import { Heart } from 'lucide-vue-next';
</script>

<template>
    <div class="min-h-screen bg-linear-to-br from-orange-100 to-purple-100">
        <nav>
            <div class="flex justify-end items-center gap-4 pr-6 py-6">
                <router-link to="/favorites">
                    <button class="rounded-full p-3 bg-transparent font-bold shadow-lg">
                        <Heart size="30" />
                    </button>
                </router-link>
                <CartShop />
            </div>
            <router-link to="/clothes"></router-link>
        </nav>
        <router-view />
    </div>
</template>
