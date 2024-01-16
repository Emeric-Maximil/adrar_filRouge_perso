import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import footerComponent from "./components/0-components/Footer.vue"



import router from './router'

createApp(App).use(router).mount('#app');

