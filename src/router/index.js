import { createRouter, createWebHistory } from "vue-router"
import ClothesDetailView from "@/views/ClothesDetailView.vue"
import ClothesView from "@/views/ClothesView.vue"
import CartShopView from "@/views/CartShopView.vue"
import NotFoundView from "@/views/NotFoundView.vue"
import FavoritesView from "@/views/FavoritesView.vue"
import CreateProductView from "@/views/CreateProductView.vue"

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
  {
    path: "/cartshop",
    name: "cartshop",
    component: CartShopView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/create-product",
    name: "create",
    component: CreateProductView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
