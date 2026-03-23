<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductos } from '@/composables/useProducts'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'

const { t: traducir } = useI18n()
const router = useRouter()
const { postData, loading, error } = useProductos()

const form = ref({
  name: '',
  description: '',
  price: '',
  stock: '',
  category: ''
})

async function handleSubmit() {
  if (!form.value.name || !form.value.description || !form.value.price || !form.value.stock || !form.value.category) {
    toast.error(traducir('createProduct.validation'))
    return
  }
  const data = await postData("/products", form.value)
  if (data) {
    toast.success(traducir('createProduct.success'))
    router.push('/clothes')
  } else {
    toast.error(traducir('createProduct.error'))
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto py-20 px-6">
    <h1 class="text-2xl font-bold mb-8">{{ traducir('createProduct.title') }}</h1>

    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>

    <div class="flex flex-col gap-4">
      <input v-model="form.name" type="text" :placeholder="traducir('createProduct.name')"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300" />
      <textarea v-model="form.description" :placeholder="traducir('createProduct.description')" rows="3"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300" />
      <input v-model="form.price" type="number" :placeholder="traducir('createProduct.price')"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300" />
      <input v-model="form.stock" type="number" :placeholder="traducir('createProduct.stock')"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300" />
      <input v-model="form.category" type="text" :placeholder="traducir('createProduct.category')"
        class="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-300" />

      <button @click="handleSubmit" :disabled="loading"
        class="mt-4 px-6 py-3 rounded-2xl bg-linear-to-br from-green-500 to-green-300 text-black font-bold shadow-lg disabled:opacity-50">
        {{ loading ? traducir('createProduct.buttonLoading') : traducir('createProduct.button') }}
      </button>
    </div>
  </div>
</template>