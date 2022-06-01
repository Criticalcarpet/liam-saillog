import { createApp } from 'vue'
import App from '../vue/App.vue'
import router from '../vue/router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const app = createApp(App)

app.use(VueSidebarMenu)
app.use(router)
app.mount('#app')
