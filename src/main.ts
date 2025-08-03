import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import { i18n } from './languages/i18n'
import App from './App.vue'
import router from './router'

const app =  createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
