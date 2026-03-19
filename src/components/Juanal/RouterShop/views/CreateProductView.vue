<script setup>
import { ref } from 'vue'
import { usefetchApi } from '../composables/useProducts.js'
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

const router = useRouter()
const { fetchData, loading, error } = usefetchApi()

const form = ref({
  name: '',
  description: '',
  price: '',
  stock: '',
  category: '',
})

async function handleSubmit() {
  await fetchData('/products', {}, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...form.value,
      price: parseFloat(form.value.price),
      stock: parseInt(form.value.stock),
    })
  })
  if (!error.value) router.push('/clothes')
}
</script>

<template>
  <div class="min-h-screen bg-slate-800 p-8 pt-16">
    <div class="max-w-xl mx-auto">

      <button @click="router.back()" class="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
        <ArrowLeft :size="16" />
        Volver a la tienda
      </button>

      <h1 class="text-3xl font-bold text-white mb-8">Crear producto</h1>

      <div class="bg-white rounded-2xl p-8 flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">Nombre</label>
          <input v-model="form.name" type="text" placeholder="Nombre del producto"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">Descripción</label>
          <textarea v-model="form.description" placeholder="Descripción del producto" rows="3"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">Precio (€)</label>
          <input v-model="form.price" type="number" step="0.01" placeholder="0.00"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">Stock</label>
          <input v-model="form.stock" type="number" placeholder="0"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">Categoría</label>
          <input v-model="form.category" type="text" placeholder="Categoría"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

        <button
          @click="handleSubmit"
          :disabled="loading"
          class="mt-2 bg-slate-800 text-white font-semibold rounded-xl px-6 py-3 hover:bg-slate-700 disabled:opacity-50 transition-colors"
        >
          {{ loading ? 'Creando...' : 'Crear producto' }}
        </button>
      </div>

    </div>
  </div>
</template>