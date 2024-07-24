// import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as Vue from 'vue'

const app = Vue.createApp(App)

app.use(createPinia())
app.mount('#app')

// createApp(App).use(createPinia()).use(store).mount('#app')
