<template>
    <div class="min-h-screen relative flex items-center justify-center">
        <div class="relative z-10 text-center px-4">
            <div
                class="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-12 max-w-md mx-auto">
                <h1 class="text-9xl font-bold text-gray-800 mb-4">404</h1>
                <h2 class="text-2xl font-bold text-gray-700 mb-4">ERROR</h2>
                <h2 class="text-2xl font-bold text-gray-700 mb-4">Página no encontrada</h2>
                <p class="text-gray-600 mb-8">La página que buscas no existe o ha sido modificada.</p>
                <router-link to="/clothes"
                    class="inline-block px-8 py-3 rounded-full bg-linear-to-br from-sky-500 to-blue-600 text-white font-bold shadow-lg hover:from-sky-600 hover:to-blue-700 hover:-translate-y-0.5 transition-all duration-300">
                    Volver al inicio
                </router-link>
            </div>
        </div>
    </div>
</template>
