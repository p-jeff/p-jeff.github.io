<script>
	import EntryButton from './EntryButton.svelte';
	import '../global.css';

	let Entries = [
		{ label: 'McBoaty', link: 'https://p-jeff.github.io/McBoaty/', enabled: true },
		{ label: 'Music Visalizer', link: 'https://p-jeff.github.io/MusicVisBox/', enabled: false },
		{ label: 'GaBot', link: 'https://p-jeff.github.io/gabot/', enabled: false }
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

<h3 class="red">
	I am currently restructuring my GitHub which is why some are diabled at the moment
</h3>

<style>
	h3 {
		text-align: right;
		max-width: 50%;
		margin-left: 40%;

		font: 1.5em Raleway;
	}
	.red {
		color: rgb(214, 100, 100);
	}
	.left {
		text-align: left;
		max-width: 50%;
		margin-bottom: 20%;
		margin-left: 10%;
		font: 1em Raleway;
	}
</style>
