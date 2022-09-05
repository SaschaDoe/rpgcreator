<script>
    export let worldEntry = {id: 2, name: "Zweiter seiner Art", race: "Spasst", isClicked: false}
    
    const clickHandler = () => {
        worldEntry.isClicked = !worldEntry.isClicked;
	};
</script>

{#if worldEntry.isClicked}
<div class="container clicked" on:click={() => clickHandler()}>
    <p class="name">{worldEntry.name}</p>
    <p>{"Planet: "+worldEntry.race}</p>
</div>
{:else}
<div class="container" on:click={clickHandler}>
    <p class="name">{worldEntry.name}</p>
    <p>{"Planet: "+worldEntry.race}</p>
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