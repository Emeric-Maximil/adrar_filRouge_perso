<template>
  <link
    href="https://fonts.googleapis.com/css?family=Fredericka the Great"
    rel="stylesheet"
  />

  <div>
    <div style="display: flex; align-items: center; margin-top: 0%">
      <img
        src="../../assets/logo.png"
        alt="image logo"
        style="width: 10%; height: 10%; margin: auto;"
      />
      <h1 style="margin: auto" class="desktop">ROLE A DICE</h1>

      <span v-if="isLoggedIn" style="margin: auto;">
        <router-link to="/sign" style="margin: auto;"
          >Compte</router-link
        >
        <button @click="signOut" style="margin: auto;">Déconnexion</button>
      </span>
      

      <span v-else style="margin: auto; margin-right: 1%">
        <router-link to="/connexion">Se connecter</router-link>
        <router-link to="/inscription">S'inscrire</router-link>
      </span>
    </div>
  </div>

  <nav>
    <router-link to="/"> Accueil </router-link>
    <span v-if="isLoggedIn">
      |
      <router-link to="/parties">Liste des parties </router-link>
      |
      <router-link to="/characters"> Banque des personnages</router-link>
      |
      <router-link to="/other"> Autres </router-link>
    </span>
    <span v-else>
      |
      <router-link to="/DMCA"> DMCA</router-link>
      |
      <router-link to="/help"> Aides </router-link>
    </span>
  </nav>
  <div class="separator" style="margin-bottom: 1%"></div>
</template>

<script setup>
import { ref } from "vue"; // pour v-if  conditional rendering
import firebase from "firebase";
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(true);
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
    // console.log(isLoggedIn.value);
  } else {
    isLoggedIn.value = false; // if we do not
    // console.log(isLoggedIn.value);
  }
});
const signOut = () => {
  localStorage.setItem('userEmail', "");
  firebase.auth().signOut();
  router.push("/");
};
</script>

<style scoped lang="css"></style>
