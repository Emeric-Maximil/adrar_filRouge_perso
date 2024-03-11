<template>
    <link
        href="https://fonts.googleapis.com/css?family=Fredericka the Great"
        rel="stylesheet"
    />

    <div>
        <div style="display: flex; align-items: center; margin-top: 0%">
            <img
                src="../../assets/logo.png"
                alt="image jeu de role"
                style="width: 10%; height: 10%; margin: auto; margin-left: 0%;"
            />
            <h1 style="margin: auto" class="desktop">ROLE A DICE</h1>
            <router-link to="/sign" style="margin: auto; margin-right: 1%;"
                >Compte</router-link
            >
			
			<span v-if="isLoggedIn">
        		<button @click="signOut">Logout</button>
      		</span>
			  <span v-else>
				<router-link to="/connexion" style="margin: auto; margin-right: 1%;"
                >connexion test</router-link
            >
			<router-link to="/inscription" style="margin: auto; margin-right: 1%;"
                >inscription test</router-link
            >
			</span>
        </div>
    </div>
	<nav >
        <router-link to="/"> Accueil </router-link>
        |
        <router-link to="/parties">Liste des parties </router-link>
        |
        <router-link to="/characters"> Banque de perso</router-link>
        |
        <router-link to="/other"> Autres </router-link>

      </nav>
	  <div class="separator" style="margin-bottom: 1% ;"></div>
</template>

<script setup>
import { ref } from 'vue' // pour v-if  conditional rendering
import firebase from 'firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
	isLoggedIn.value = true // if we have a user
	// console.log(isLoggedIn.value);
  } else {
	isLoggedIn.value = false // if we do not
	// console.log(isLoggedIn.value);
  }
})
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}
</script>

<style scoped lang="css"></style>
