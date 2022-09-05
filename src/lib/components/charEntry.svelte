<script>
import { Char, charClasses, races } from "$lib/objects/char";

export let charEntry = {char: new Char(1).withRace(races.None).withClass(charClasses.None), isClicked: false};
    
    const clickHandler = () => {
        charEntry.isClicked = !charEntry.isClicked;
	};
</script>

{#if charEntry.isClicked}
<div class="container clicked" on:click={() => clickHandler()}>
    <p class="name">{charEntry.char.name}</p>
    <p>{"Klasse: "+charEntry.char.charClass}</p>
</div>
{:else}
<div class="container" on:click={clickHandler}>
    <p class="name">{charEntry.char.name}</p>
    <p>{"Klasse: "+charEntry.char.charClass}</p>
</div>
{/if}


<style>
    .container{
        border:1px solid black;
    }
    .name{
        font-weight: bold;
    }

    p{
        text-align: left;
        padding: 5px
    }

    .clicked{
        border: 3px solid green;
    }
</style>