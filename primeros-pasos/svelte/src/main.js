import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Imanol',
		lastName: 'Suarez'
	}
});

export default app;