<script>
	import About from './components/About.svelte';
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte';
	import Skills from './components/Skill.svelte';
	import Input from './components/Input.svelte';
	import Photos from './components/Photos.svelte';
	import ButtonCount from './components/ButtonCount.svelte';

	export let name;
	export let lastName;
	export let age;
	let svelteLogo = 'https://arepa.s3.amazonaws.com/svelte-logo.png'


	const data = {
		name: "Imanol",
		lastName: "Suarez",
		age: 21
	}






</script>

<style>

	/* Estilos Globales */
	:global(body){
		background-color:#f2eee2;
		color: #0084f6;
	}

	:global(root) {
		/*VARIABLES*/
		--theme-color: purple;
		--color-darkMode: #bfc2c7
	}


	:global(body.dark-mode){
		background-color: #1d3040;
		color: var(--color-darkMode);
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img {
		width:30%
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>

<main>
	<h1>Hello {name}! { lastName }</h1>
	<About />
	<Text anotherText="Hola"/>
	<Text />
	// COMPONENTE DATA DESTRUCTURADO
	<Person {...data} /> 

	<Skills />

	<Input />

	<ButtonCount />

	<Photos />
	<img src={svelteLogo} alt='Svelte Logo'/>
</main>