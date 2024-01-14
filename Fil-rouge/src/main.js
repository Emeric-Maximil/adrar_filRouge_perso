import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import footerComponent from "./components/0-components/Footer.vue"



import router from './router'


const app = createApp(App).use(router)
app.component('footer-component',footerComponent);
app.mount('#app');
