<template>
	<h1>Connectez vous...</h1>
	<p><input type="text" placeholder="Email" v-model="email" /></p>
	<p><input type="password" placeholder="Password" v-model="password" /></p>
	<p v-if="errMsg">{{ errMsg }}</p>
	<p><button @click="signIn">Se Connecter</button></p>
</template>

<script setup>


import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router


const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const signIn = () => { 
	firebase
		.auth()
		.signInWithEmailAndPassword(email.value, password.value) 
		.then((data) => {
			console.log('Successfully logged in!');
			// Enregistrer l'email dans le local storage
			localStorage.setItem('userEmail', email.value);
			console.log("enregistrement du mail dans le local storage "+ localStorage.getItem('userEmail'));
			router.push('/') // redirect to the homepage
		})
		.catch(error => {
			switch (error.code) {
				case 'auth/invalid-email':
					errMsg.value = 'Invalid email'
					break
				case 'auth/user-not-found':
					errMsg.value = 'No account with that email was found'
					break
				case 'auth/wrong-password':
					errMsg.value = 'Incorrect password'
					break
				default:
					errMsg.value = 'Email or password was incorrect'
					break
			}
		});
}
</script>

<style scoped lang="css"></style>