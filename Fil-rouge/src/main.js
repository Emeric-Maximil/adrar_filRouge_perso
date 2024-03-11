import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import firebase from "firebase"
import './style.css'


const firebaseConfig = {
    apiKey: "AIzaSyCPyGwX7b2YT_gverXzqzNCouUf3tRsvHs",
    authDomain: "fil-rouge-firebase-9bdf4.firebaseapp.com",
    projectId: "fil-rouge-firebase-9bdf4",
    storageBucket: "fil-rouge-firebase-9bdf4.appspot.com",
    messagingSenderId: "147569408762",
    appId: "1:147569408762:web:6c0fc3223a110efc676743"
  };
firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app');

