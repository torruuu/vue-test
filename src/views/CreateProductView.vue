<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductos } from '@/composables/useProducts'

const router = useRouter()
const { postData, loading, error, BASE_URL } = useProductos()

const form = ref({
  name: '',
  description: '',
  price: '',
  stock: '',
  category: ''
})

async function handleSubmit() {
  const data = await postData(BASE_URL, form.value)
  if (data) {
    router.push('/clothes')
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto py-20 px-6">
    <h1 class="text-2xl font-bold mb-8">Crear producto</h1>

    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>

    <div class="flex flex-col gap-4">
      <input
        v-model="form.name"
        type="text"
        placeholder="Nombre"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
      />
      <textarea
        v-model="form.description"
        placeholder="Descripción"
        rows="3"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
      />
      <input
        v-model="form.price"
        type="number"
        placeholder="Precio"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
      />
      <input
        v-model="form.stock"
        type="number"
        placeholder="Stock"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
      />
      <input
        v-model="form.category"
        type="text"
        placeholder="Categoría"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300"
      />

      <button
        @click="handleSubmit"
        :disabled="loading"
        class="mt-4 px-6 py-3 rounded-2xl bg-linear-to-br from-green-500 to-green-300 text-black font-bold shadow-lg disabled:opacity-50"
      >
        {{ loading ? 'Creando...' : 'Crear producto' }}
      </button>
    </div>
  </div>
</template>
