<script setup>
const links = [
  {
    id: 1,
    title: "Inicio",
    link: "/"
  },
  {
    id: 2,
    title: "Tutoriales",
    link: "/"
  }
]



</script>


<template>
  <header class="bg-gray-400 w-full h-30 flex justify-between items-center">
    <img src="../assets/logo.png" alt="logo"/>
    <div class="flex gap-5 mr-4">
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.link"
      >
        {{ link.title }}
      </a>
    </div>
  </header>
</template>