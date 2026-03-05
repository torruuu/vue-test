//IMPORTAMOS CREATE ROUTER Y CREATEWEBHISTORY DE LA DEPENDENCIA INSTALADA VUE-ROUTER.
import { createRouter, createWebHistory } from "vue-router"
//IMPORTAMOS LOS COMPONENTES CREADOS.
import PadreShop from "@/components/Juanal/RouterShop/components/PadreShop.vue"
import ProductView from "@/components/Juanal/RouterShop/views/ProductView.vue"
import CarritoShopView from "@/components/Juanal/RouterShop/views/CarritoShopView.vue"
import FavoritosView from "@/components/Juanal/RouterShop/views/FavoritosView.vue"
//import ProductCardShop from "@/components/Juanal/RouterShop/ProductCardShop.vue";
//2. CREAMOS ARRAY DE RUTAS. OBJETO CON 3 ELEMENTOS: PATH - URL / NAME - ALIAS INTERNO - COMPONENT - COMPONENTE QUE MUESTRA.
const routes = [
  { path: "/", redirect: "/clothes" },
  { path: "/clothes", name: "clothes", component: PadreShop },
  { path: "/clothes/:id", name: "view", component: ProductView },
  { path: "/carrito", name: "carrito", component: CarritoShopView },
  { path: "/favoritos", name: "favoritos", component: FavoritosView },
]
// 3. CREAMOS ROUTER. LE PASAMOS EL HISTORIAL Y LAS RUTAS.
const router = createRouter({
  history: createWebHistory(),
  routes,
})
//4. EXPORTAMOS RPUTER PARA PODER TRABAJARLO FUERA DE ESTE ARCHIVO, NOS VAMOS AL MAIN.JS

export default router
