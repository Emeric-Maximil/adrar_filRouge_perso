import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import router from './router'
import { firebaseConfig } from  './firebase.js'
import firebase from "firebase"




firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app');

