


<template>

  <div id="app">

    <header-component></header-component>
    
    <router-view />
  
    <div class="app" ></div>

    <footer-component></footer-component>
  
  </div>
</template>


<script>
import footerComponent from "./components/0-components/Footer.vue"
import headerComponent from "./components/0-components/Header.vue"

 export default{
  components:{
    'footer-component':footerComponent,
    'header-component':headerComponent,
  },
  data(){
    return{
      
    }
  },
   methods: {
   
   },
 };

</script>