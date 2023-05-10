<script>
	import { onMount } from "svelte";
	import Director from './base/Director.svelte'
    const urlParams = new URLSearchParams(window.location.search);
	const creaturePath = urlParams.get('creature');
	let creature = {}

	onMount(async function () {
		const response = await fetch(creaturePath);
		const data = await response.json();
		console.log(data);
		console.log(typeof data);

		creature = data;
	});
</script>

<main>
	<Director creature={creature}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: #000000;
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