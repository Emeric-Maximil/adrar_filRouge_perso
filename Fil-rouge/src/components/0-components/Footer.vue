<template>
    <div style="background-color: rgb(230, 230, 230); display: flex; align-items: center; margin-top: 0%">
		
        
        <h1 style="margin: auto;">footer1</h1><h1 style="margin: auto;">footer2</h1><h1 style="margin: auto;">footer3</h1>
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
