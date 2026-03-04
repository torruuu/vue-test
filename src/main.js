import "./assets/main.css"

import { createApp } from "vue"
//IMPORTAMOS CREATE_PINIA DE LA DEPENDENCIA PINIA, INSTALADA.
import { createPinia } from "pinia"
import App from "./App.vue"
//IMPORTAMOS EL ROUTER CREADO. EN LA PARTE DE CREATE APP LE DECIMOS QUE UTILICE ESE ROUTER PARA MONTAR LA APP. NOS VAMOS A APP.VUE
import router from "./router/router"

createApp(App).use(createPinia()).use(router).mount("#app")
