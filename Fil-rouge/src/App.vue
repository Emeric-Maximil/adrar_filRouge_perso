


<template>

  <div id="app">

  <header>

    <div style="display: flex;  align-items: center; margin-top: 0%;">
      <img src="./assets/logo.png" alt="image jeu de role" style="width: 20%; height: 20%; margin-left: 0%;" >
      <h1 style="margin: auto;">ROLE A DICE</h1>
      <router-link to="/account" style="margin-left: auto;">Votre compte</router-link>
    </div>

  </header>
  

    <div class="app" >
      <nav>
        <router-link to="/"
        :class="{ underlined: selectedIdx == 0? true:false, notUnderlined: selectedIdx != 0? true:false }"
        @click="selectedIndex(0)"
        ><a href="#"> Accueil </a></router-link>
        |
        <router-link to="/parties"
       :class="{ underlined: selectedIdx == 1 ? true:false, notUnderlined: selectedIdx !=1? true:false}"
       @click="selectedIndex(1)"
        ><a href="#"> Liste des parties  </a></router-link>
        |
        <router-link to="/characters"
        :class="{ underlined: selectedIdx == 2 ? true:false, notUnderlined: selectedIdx !=2? true:false}"
       @click="selectedIndex(2)"
        ><a href="#"> Banque de perso  </a></router-link>
        |
        <router-link to="/subscription"
        :class="{ underlined: selectedIdx == 3 ? true:false, notUnderlined: selectedIdx !=3? true:false}"
       @click="selectedIndex(3)"
        ><a href="#"> Abonnement </a></router-link>
        |
        <router-link to="/other"
        :class="{ underlined: selectedIdx == 4 ? true:false, notUnderlined: selectedIdx !=4? true:false}"
       @click="selectedIndex(4)"
        ><a href="#"> Autres  </a></router-link>

        <router-view />
      </nav>
      
    </div>
    <div class="separator"></div>

    <footer-component></footer-component>
  
  </div>
</template>

<script>
 export default{
  data(){
    return{
      selectedIdx: 0,
    }
  },
   methods: {
    selectedIndex(index){
      this.selectedIdx = index;
    },
   },
 };

</script>