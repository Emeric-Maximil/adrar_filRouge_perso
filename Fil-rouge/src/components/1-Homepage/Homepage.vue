<template>
	<div>
		<div class="separator"></div>
<div style="display: flex;  margin: 20px;">
	<div id="partie gauche" style="margin-top: -10px; margin-right: 10%; font-size: 0.7em;">
			<h1>Jouez sans prise de tête, on s'occupe de tout !</h1>
			<p style="color: black; font-size: 1.8em;">Créez des personnages, 
				organisez vos sessions, trouvez des joueurs et personnalisez vos scénarios 
				- tout cela facilement et directement depuis votre navigateur.</p>
	</div>
	<img src="../../assets/map.png" alt="map de jeu de role" style="width: 50%; height: 50%; margin-left: auto; border-radius: 10%;">
</div>
		
		<h1>Homepage</h1>
	</div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Homepage',
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

<style scoped lang="css">
</style>