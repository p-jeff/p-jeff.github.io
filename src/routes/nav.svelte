<script>

    import '../global.css'

    import Button from './button.svelte';

    const Index =[
        {name: "McBoaty", url: "https://p-jeff.github.io/McBoaty/", info: "2022, Svelte, OpenWeatherAPI, Location API, anime.js"},
        {name:"Am I Gaboniontum?", url: "https://p-jeff.github.io/gabot/", info: '2022, React, Part of "Am I Gaboniontum" installation, Semester Project at Design Investigations, University of Applied Arts Vienna'},
        {name: "Brushstroke Music Visualizer", url: "https://p-jeff.github.io/dots/", info:"2021, React, reactThreeFiber, three.js" },
        {name: "Experiments with Perlin Noise", url: "https://editor.p5js.org/p.jeff/full/o51XzHHBs", info:"2021, p5.js, during a lecture with Jonas Bohatsch, University of Applied Arts Vienna"},
        {name: "Plant Creator", url: "https://editor.p5js.org/p.jeff/full/COY3YAoKe", info:"2021, p5.js, during a lecture with Jonas Bohatsch, University of Applied Arts Vienna" },
    ]

</script>

<div class="nav">
    <div class="flexbox">
    {#each Index as Content}
        <Button {...Content} on:info/>
    {/each}
</div>
</div>

<style>
    .nav{
    grid-column: 1 / span 3 ;
    grid-row: 2/5;
}


</style>