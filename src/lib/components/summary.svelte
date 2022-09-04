<script>
    import CharEntry from "./charEntry.svelte"
    let charEntries = [
        {id: 0, name: "Erster seiner Art", race: "Spasst", isClicked: false},
        {id: 1, name: "Zweiter seiner Art", race: "Spasst", isClicked: false},
    ]

    import WorldEntry from "./worldEntry.svelte"
    let worldEntries = [
        {id: 0, name: "Welt1", race: "Planetx", isClicked: false},
        {id: 1, name: "Welt1", race: "Planety", isClicked: false},
    ]

    let isCharClicked = false;
    function clickedOnChar(id=0) {
        isCharClicked = true;
        isWorldClicked = false;
        resetSelection()
        for(let i = 0; i < charEntries.length; i++){
            if(i == id){
                charEntries[i].isClicked = true;
            }
        }
	}

    let isWorldClicked = false;
    function clickedOnWorld(id=0) {
        isWorldClicked = true;
        isCharClicked = false;
        resetSelection()
        for(let i = 0; i < worldEntries.length; i++){
            if(i == id){
                worldEntries[i].isClicked = true;
            }
        }
	}

    function resetSelection(){
        for(let i = 0; i < worldEntries.length; i++){
                worldEntries[i].isClicked = false;
        }
        for(let i = 0; i < charEntries.length; i++){
                charEntries[i].isClicked = false;
        }
    }

</script>

    <h2 id="summary-header">Zusammenfassung</h2>
    <div class="summary-chars summary-group">
        <h3 class="{isCharClicked ? "clicked" : ""} ">Charaktere</h3>
        <ul>
            {#each charEntries as charEntry}
                    <div on:click={() => clickedOnChar(charEntry.id)}>
                        <CharEntry bind:charEntry={charEntry}/>
                    </div>
            {/each}
        </ul>
        <h3 class="{isWorldClicked ? "clicked" : ""} ">Welt</h3>
        <ul>
            {#each worldEntries as worldEntry}
                    <div on:click={() => clickedOnWorld(worldEntry.id)}>
                        <WorldEntry bind:worldEntry = {worldEntry}/>
                    </div>
            {/each}
        </ul>
    </div>

<style>
    .summary-group{
	    border: 1px solid grey;
    }

    h2{
		font-size: 2em;
		font-weight: 60;
	}

    .clicked{
        color: green;
    }

</style>