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
			<router-link to="/connexion" style="margin: auto; margin-right: 1%;"
                >connexion test</router-link
            >
			<router-link to="/inscription" style="margin: auto; margin-right: 1%;"
                >inscription test</router-link
            >
        </div>
    </div>
	<nav class="no-link-styling">
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

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Header',
	components: {
	},
	props: {
		// v-model
		modelValue: {
			default: '',
		},
	},
	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
		return {
		};
	},
	computed: {
		value: {
			get () {
				return this.modelValue;
			},
			set (value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	watch: {
		modelValue: {
			async handler (_newValue, _oldValue) {
				// do something
			},
			immediate: true
		},
	},
	beforeMount() {
	},
	mounted() {
	},
	updated() {
	},
	beforeUnmount() {
		// stop the wacher on modelValue
		this.$watch('modelValue', () => {}, {});
	},
	methods: {
	},
});
</script>

<style scoped lang="css"></style>
