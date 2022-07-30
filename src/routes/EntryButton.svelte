<script>
	export let label;
	export let link;
	export let enabled;

	function clickHandler() {
		window.location = link;
	}
</script>

{#if enabled}
	<button on:click={clickHandler} class="button-74"> {label} </button>
{:else}
	<button class="buttonDiabled"> {label} </button>
{/if}

<style>
	button {
		margin: 5%;
		font: 1.5em Raleway;
	}

	.buttonDiabled {
		background-color: rgb(214, 100, 100);
		border: 2px solid #422800;
		border-radius: 0px;
		text-decoration: line-through;
		color: #422800;
		cursor: pointer;
		display: inline-block;
		font-weight: 600;
		font-size: 18px;
		padding: 0 18px;
		line-height: 50px;
		text-align: center;
	}

	.button-74 {
		background-color: aquamarine;
		border: 2px solid #422800;
		border-radius: 0px;
		box-shadow: #616161 4px 4px 0 0;
		color: #422800;
		cursor: pointer;
		display: inline-block;
		font-weight: 600;
		font-size: 18px;
		padding: 0 18px;
		line-height: 50px;
		text-align: center;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button-74:hover {
		background-color: #fff;
	}

	.button-74:active {
		box-shadow: #422800 2px 2px 0 0;
		transform: translate(2px, 2px);
	}

	@media (min-width: 768px) {
		.button-74 {
			min-width: 120px;
			padding: 0 25px;
		}
	}
</style>
