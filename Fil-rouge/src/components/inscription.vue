<template>
	<h1>Créer un compte</h1>
	<p><input type="text" placeholder="Mail" v-model="email" required /></p>
	<p><input type="password" placeholder="Mot de passe" v-model="password" required /></p>
	<p><input type="password" placeholder="Vérification de mot de passe" v-model="passwordCheck" required /></p>
	<p v-if="invalide" >Les mots de passes doivent être identiques</p>
	<p><button @click="register">S'inscrire</button></p>

</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
const passwordCheck = ref('')
const invalide = ref(false);
const router = useRouter() // get a reference to our vue router
const register = () => {
	if(password.value === passwordCheck.value){
	firebase
		.auth() // get the auth api
		.createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
		.then((data) => {
			console.log('Inscription validée');
			// Enregistrer l'email dans le local storage
			localStorage.setItem('userEmail', email.value);
			console.log("enregistrement du mail dans le local storage "+ localStorage.getItem('userEmail'));
			router.push('/') // redirect to the homepage
		})
		.catch(error => {
			console.log(error.code)
			alert(error.message);
		});
	}else{
		invalide.value = true;
		console.log("mots de passe non identiques");
	}
}
</script>

<style scoped lang="css"></style> 