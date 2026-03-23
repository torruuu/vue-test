<script setup>
import { ref } from 'vue'
import { usefetchApi } from '../composables/useProducts.js'
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import {toast} from 'vue-sonner';
import { useI18n } from 'vue-i18n';

const {t} = useI18n();
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
if (!error.value) {
  toast.success(t('createProduct.successToast'))
  setTimeout(() => router.push('/clothes'), 2000) 
} else {
  toast.error(t('createProduct.errorToast'))
}}
</script>
<template>
  <div class="min-h-screen bg-slate-800 p-8 pt-16">
    <div class="max-w-xl mx-auto">

      <button @click="router.back()" class="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
        <ArrowLeft :size="16" />
        {{ t('createProduct.back') }}
      </button>

      <h1 class="text-3xl font-bold text-white mb-8">{{ t('createProduct.title') }}</h1>

      <div class="bg-white rounded-2xl p-8 flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">{{ t('createProduct.name') }}</label>
          <input v-model="form.name" type="text" :placeholder="t('createProduct.namePlaceholder')"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">{{ t('createProduct.description') }}</label>
          <textarea v-model="form.description" :placeholder="t('createProduct.descriptionPlaceholder')" rows="3"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">{{ t('createProduct.price') }}</label>
          <input v-model="form.price" type="number" step="0.01" :placeholder="t('createProduct.pricePlaceholder')"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">{{ t('createProduct.stock') }}</label>
          <input v-model="form.stock" type="number" :placeholder="t('createProduct.stockPlaceholder')"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-slate-600">{{ t('createProduct.category') }}</label>
          <input v-model="form.category" type="text" :placeholder="t('createProduct.categoryPlaceholder')"
            class="border rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>

        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

        <button
          @click="handleSubmit"
          :disabled="loading"
          class="mt-2 bg-slate-800 text-white font-semibold rounded-xl px-6 py-3 hover:bg-slate-700 disabled:opacity-50 transition-colors"
        >
          {{ loading ? t('createProduct.submitting') : t('createProduct.submit') }}
        </button>
      </div>

    </div>
  </div>
</template>