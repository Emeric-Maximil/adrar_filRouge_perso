<template>
<div class="container">

	<div class="row">

		<div class="col-12 col-md-4">
			<h3>Conditions d'utilisation</h3>
			<p>Toutes images peuvent être soumises à des droits d'auteur, restez vigilent.</p>
		</div>

		<div class="col-12 col-md-4">
			<h3>Nous contacter</h3>
			<p style="margin-bottom: 0%;">Tel : 06.12.34.56.78</p>
			<p style="margin-top: 0%;">Mail : e.mail@mail.me</p>
		</div>

		<div class="col-12 col-md-4">
			<h3>FAQ</h3>
			<p>Vous avez besoin de poser une question ou vous recherchez des réponses ? N'attendez plus !</p>
		</div>
	</div>
</div>
        
		
		
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Footer',
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
