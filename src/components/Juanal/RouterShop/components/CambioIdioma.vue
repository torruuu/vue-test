<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function cambiarIdioma(lang) {
  locale.value = lang
}
</script>

<template>
  <div class="fixed top-4 right-52 z-50">
    <div class="bg-white rounded-full shadow-lg flex overflow-hidden">
      <button
        @click="cambiarIdioma('es')"
        :class="locale === 'es' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'"
        class="px-3 py-2 text-sm font-medium transition-colors"
      >
        ES
      </button>
      <button
        @click="cambiarIdioma('en')"
        :class="locale === 'en' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'"
        class="px-3 py-2 text-sm font-medium transition-colors"
      >
        EN
      </button>
    </div>
  </div>
</template>