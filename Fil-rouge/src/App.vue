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
    <div class="app">
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
  </div>
</template>