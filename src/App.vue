<script setup>
import CartShop from './components/Laura/Clothes_Shop/CartShop.vue';
</script>

<template>
    <div class="min-h-screen bg-linear-to-br from-orange-100 to-purple-100">
        <nav>
            <div>
                <CartShop />
            </div>
            <router-link to="/clothes"></router-link>
        </nav>
        <router-view />
    </div>
</template>
