import { createRouter, createWebHistory } from "vue-router"
import ClothesDetailView from "@/views/ClothesDetailView.vue"
import ClothesView from "@/views/ClothesView.vue"

const routes = [
  {
    path: "/",
    redirect: "/clothes",
  },
  {
    path: "/clothes",
    name: "clothes",
    component: ClothesView,
  },
  {
    path: "/clothes/:id",
    name: "clothes/",
    component: ClothesDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
