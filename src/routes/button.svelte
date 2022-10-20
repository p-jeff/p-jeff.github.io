<script>
    import '../global.css'
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let name;
	export let url;
    export let info;

    function clickHandler() {
		window.location = url;
	}

    function forwardInfo(){
        dispatch('info',info)
    }
</script>

<button on:click={clickHandler} on:mouseenter={forwardInfo}> {name} </button>

<style>
   button {
        font-family: Josefin Sans;
        background-color: rgba(0,0,0,0);
        border: none;
        color: #fefeef;
        text-shadow: -2px -2px #000000;
        margin: 0%;
        padding: 5%;
        text-align: center;
        font-size: 90%;
       max-width: fit-content;
    }

    button:hover{
        text-decoration: line-through;
        text-decoration-color: crimson;
    }
</style>