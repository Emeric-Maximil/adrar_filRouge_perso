<template>
  <div class="container">
    <div class="row">
      <div id="Signin" class="col-6">
        <h1>Connectez vous</h1>
        <p>
          <input type="text" placeholder="Email" v-model="email" />
        </p>
        <p>
          <input type="password" placeholder="Password" v-model="password" />
        </p>
        <button @click="signIn">Se Connecter</button>
      </div>

      <div id="register" class="col-6">
        <h1>Inscrivez vous</h1>
		<p><input type="text" placeholder="Email" v-model="email" /></p>
		<p><input type="password" placeholder="Password" v-model="password" /></p>
		<p><input
          type="password"
          placeholder="Password Verify"
          v-model="passwordVerif"
        /></p>
        
        
        
        <button @click="signIn">S'enregistrer</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Sign',
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
