


<template>

  <div id="app">


    <header-component></header-component>
  
  

    <div class="app" >
     <!-- 
      <nav>
        <router-link to="/"> <span class="desktop">Accueil </span></router-link>
        |
        <router-link to="/parties"> <span class="desktop">Liste des parties</span> </router-link>
        |
        <router-link to="/characters"> <span class="desktop">Banque de perso</span>  </router-link>
        |
        <router-link to="/subscription"> <span class="desktop">Abonnement</span> </router-link>
        |
        <router-link to="/other"> <span class="desktop">Autres </span> </router-link>

        <router-view />
      </nav>
      -->

      <nav>
        <router-link to="/"> Accueil </router-link>
        |
        <router-link to="/parties">Liste des parties </router-link>
        |
        <router-link to="/characters"> Banque de perso</router-link>
        |
        <router-link to="/subscription">Abonnement</router-link>
        |
        <router-link to="/other"> Autres </router-link>

        <router-view />
      </nav>
      
    </div>
    <div class="separator"></div>

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