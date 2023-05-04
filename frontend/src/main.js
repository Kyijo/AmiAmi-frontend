import { createApp } from 'vue'
import './assets/style/style.css'
import App from './App.vue'
import Router from './Routes/Router.js'

  createApp(App).use(Router).mount('#app')