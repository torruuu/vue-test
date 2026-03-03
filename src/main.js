import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
//IMPORTAMOS EL ROUTER CREADO. EN LA PARTE DE CREATE APP LE DECIMOS QUE UTILICE ESE ROUTER PARA MONTAR LA APP. NOS VAMOS A APP.VUE
import router from "./router/router"

createApp(App).use(router).mount("#app")
