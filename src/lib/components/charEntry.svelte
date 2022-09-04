<script>
    export let charEntry = {id: 2, name: "Zweiter seiner Art", race: "Spasst", isClicked: false}
    
    const clickHandler = () => {
        charEntry.isClicked = !charEntry.isClicked;
	};
</script>

{#if charEntry.isClicked}
<div class="container clicked" on:click={() => clickHandler()}>
    <p class="name">{charEntry.name}</p>
    <p>{"Klasse: "+charEntry.race}</p>
</div>
{:else}
<div class="container" on:click={clickHandler}>
    <p class="name">{charEntry.name}</p>
    <p>{"Klasse: "+charEntry.race}</p>
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