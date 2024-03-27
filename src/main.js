import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification"
import App from './App.vue'
import router from './router'   
import "vue-toastification/dist/index.css";

const app = createApp(App)
    .use(createPinia())
    .use(Toast)
    .use(router)
    .mount('#app')
