<script>
    import Nav from './nav.svelte';
    import '../global.css'
   
    let info;
    function handleMessage(event) {
		info = event.detail
	}
    let m = { x: 0, y: 0 };
</script>

<svelte:head>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Josefin+Sans">
</svelte:head>

<div class="cont" on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
    <div class="header text">
        <h1>pJeff</h1>
        <p>Hey, this is just an Index of my Coding experiments. Feel free to explore.</p>
        <p>Please keep in mind, this reflects my learning over the past years</p>
        <p style="color: crimson">None of these are optimised, I am sorry if you have scaling issues</p>
    </div>
    <div class="info text">
        <h1>Sketch Info</h1>
        <p>{info ? info : "Hover to show info"}</p>
    </div>
    <Nav on:info={handleMessage}/>
</div>

<style>

.cont{
    display:grid;
    gap: 0px;
    border: 1px;
    grid-auto-columns: 25%;
    grid-auto-rows: 25vh;
}


.text{
    margin-bottom: 2%;
    max-width: 96%;
max-height: 96%;    
margin-top: 2%;
border: 3px dashed black;
text-align: right;

}

.info{grid-column: 4/span 1;
grid-row: 3/5;
}

.header{
    grid-column: 4/span 1;
    grid-row: 1/3;
}

h1{
    font-size: 100%;
    max-width: 98%;
}

p{
    font-size: 50%;
    max-width: 98%;
}

 </style>
