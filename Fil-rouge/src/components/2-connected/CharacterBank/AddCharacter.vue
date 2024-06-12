<template>
	<div>
		<button v-if="ajout" @click="toggleAjout">Ajouter un personnage</button>

		<div v-else>
			<button @click="toggleAjout">Fermer</button>
		
		<form @submit.prevent="saveCharacter">
			<h2>Infos Générales</h2>
			<input v-model="character.universe" type="text" placeholder="Univers">
			<input v-model="character.name" type="text" placeholder="Nom">
			<input v-model="character.class" type="text" placeholder="Classe">
			<input v-model="character.level" type="text" placeholder="Niveau">
			<h2>Statistiques</h2>
			<h3>Physique</h3>
			<input v-model="character.str" type="text" placeholder="Force">
			<input v-model="character.dex" type="text" placeholder="Dexterité">
			<input v-model="character.cons" type="text" placeholder="Constitution">
			<h3>Mental</h3>
			<input v-model="character.int" type="text" placeholder="Intelligence">
			<input v-model="character.wis" type="text" placeholder="Sagesse">
			<input v-model="character.cha" type="text" placeholder="Charisme">
			<h2>Compétences</h2>
			<div>
				<input v-model="character.comp1" type="text" placeholder="">
				<input v-model="character.comp2" type="text" placeholder="">
				<input v-model="character.comp3" type="text" placeholder="">
			</div>
			<button>Ajouter</button>

		</form>
	</div>
	</div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'
import CharactersDataService from '../../../services/CharactersDataService'

export default defineComponent({
	name: 'AddCharacter',
	components: {
	},

	data() {
		return {
			ajout:false,

			character : {
				universe : "",
				name : "",
				class : "",
				level : "",
				str : "",
				dex : "",
				cons : "",
				int : "",
				wis : "",
				cha : "",
				comp3 : "",
				comp2 : "",
				comp1 : "",
			},
		};
	},
	
	methods: {
		toggleAjout(){
			this.ajout = !this.ajout;
		},

		saveCharacter(){
			const data ={ 
				universe : this.character.universe,
				name : this.character.name,
				class : this.character.class,
				level : this.character.level,

				str   : this.character.str  ,
				dex   : this.character.dex  ,
				cons  : this.character.cons ,

				int   : this.character.int  ,
				wis   : this.character.wis  ,
				cha   : this.character.cha  ,

				comp3 : this.character.comp3,
				comp2 : this.character.comp2,
				comp1 : this.character.comp1,
			}
			CharactersDataService.create(data).then(()=>{
				console.log("character ajouté");
			}).catch(error=>{
				console.log(error);
			})
		}
	},
});
</script>

<style scoped lang="css">
</style>