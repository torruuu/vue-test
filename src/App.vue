<script setup>
import CartShop from './components/Laura/Clothes_Shop/CartShop.vue';
import { Heart, Plus, Languages } from 'lucide-vue-next';
import 'vue-sonner/style.css'
import { Toaster } from 'vue-sonner';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const route = useRoute()
const { locale } = useI18n()
const idioma = ref(false)

function cambiarIdioma(lang) {
    locale.value = lang
    idioma.value = false
}

function togglePopover() {
    idioma.value = !idioma.value
}
</script>

<template>
    <div class="min-h-screen bg-radial from-white to-gray-300">
        <Toaster position="top-right" richColors />
        <nav>
            <div class="flex justify-end items-center gap-4 pr-6 py-6">
                <!-- Boton + solo si NO estamos en /create-product -->
                <router-link v-if="route.path !== '/create-product'" to="/create-product">
                    <button class="rounded-full p-3 bg-white/50 shadow-lg">
                        <Plus size="30" class="text-gray-700" /> <!-- aquí Plus, no Languages -->
                    </button>
                </router-link>
                <!-- Botón idioma solo en /create-product -->
                <div v-else class="relative">
                    <button @click="togglePopover" class="rounded-full p-3 bg-white/50 shadow-lg">
                        <Languages size="30" class="text-gray-700" />
                    </button>
                    <div v-if="idioma" class="absolute top-14 right-0 bg-white shadow-xl rounded-2xl p-2 z-10 w-36">
                        <button @click="cambiarIdioma('es')"
                            class="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100"
                            :class="locale === 'es' ? 'font-bold' : ''">
                            Español
                        </button>
                        <button @click="cambiarIdioma('en')"
                            class="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100"
                            :class="locale === 'en' ? 'font-bold' : ''">
                            English
                        </button>
                    </div>
                </div>
                <router-link to="/favorites">
                    <button class="rounded-full p-3 bg-white/50 shadow-lg">
                        <Heart size="30" class="fill-red-500 text-red-700" />
                    </button>
                </router-link>
                <CartShop />
            </div>
            <router-link to="/clothes"></router-link>
        </nav>
        <router-view />
    </div>
</template>
