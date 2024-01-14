<script>
/**
 * Liste des routes : 
 * - Accueil --
 * - Liste des parties -
 * - Banque de perso --
 * - Compte --
 * - Abonnement -
 * - Connexion/Création de compte -
 * - Nous contacter -
 * - Page d'aide -
 * - DMCA -
 * - Autres -
 */
</script>

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
        <router-link to="/" class="underlined"><a href="#"> Accueil </a></router-link>
        |
        <router-link to="/parties"><a href="#"> Liste des parties  </a></router-link>
        |
        <router-link to="/characters"><a href="#"> Banque de perso  </a></router-link>
        |
        <router-link to="/subscription"><a href="#"> Abonnement </a></router-link>
        |
        <router-link to="/other"><a href="#"> Autres  </a></router-link>

        <router-view />
      </nav>
      
    </div>
    <div class="separator"></div>
  </div>
  
</template>