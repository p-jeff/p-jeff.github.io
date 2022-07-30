<script>
	import EntryButton from './EntryButton.svelte';
	import '../global.css';

	let Entries = [
		{ label: '🚣 McBoaty', link: 'https://p-jeff.github.io/McBoaty/', enabled: true },
		{ label: '🎵 Strokes', link: 'https://p-jeff.github.io/dots/', enabled: true },
		{ label: '🫧 GaBot', link: 'https://p-jeff.github.io/gabot/', enabled: true }
	];
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
</svelte:head>

<div class="left">
	{#each Entries as Entry}
		<EntryButton {...Entry} />
	{/each}
</div>

<h3>
	Hey, I'm Johannes, studying Speculative Design at the University of applied Arts Vienna. In my
	free time I tinker around with code to create web based pieces. This is just the landing page
	linking my ideas :) <br />
</h3>

<style>
	h3 {
		text-align: right;
		max-width: 50%;
		margin-left: 40%;

		font: 1.5em Raleway;
	}

	.left {
		text-align: left;
		max-width: 50%;
		margin-bottom: 20%;
		margin-left: 10%;
		font: 1em Raleway;
	}
</style>
