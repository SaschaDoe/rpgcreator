<script>
    import { Char, charClasses, races } from "$lib/objects/char";
    import CharEntry from "./charEntry.svelte"
    import CharsStore from '../../lib/summaryData';

    import WorldEntry from "./worldEntry.svelte"
    let worldEntries = [
        {id: 0, name: "Welt1", race: "Planetx", isClicked: false},
        {id: 1, name: "Welt1", race: "Planety", isClicked: false},
    ]

    let isCharClicked = false;
    function clickedOnChar(id=0) {
        isCharClicked = true;
        isWorldClicked = false;
        selectedGroup = "chars"
        resetSelection()
        setSelected($CharsStore, id);
	}

    let isWorldClicked = false;
    function clickedOnWorld(id=0) {
        isWorldClicked = true;
        isCharClicked = false;
        selectedGroup = "world";
        resetSelection();
        setSelected(worldEntries, id);
	}

    /**
* @param {any} entries
*/
    function setSelected(entries,id=0){
        for(let i = 0; i < entries.length; i++){
            
            if(selectedId != id)
            {
                if(i == id)
                {
                    entries[i].isClicked = true;
                }
            }
        }

        if(selectedId == id){
            selectedId = -1;
        }else{
            selectedId = id;
        }

        selectionHandler();
    }


    function resetSelection(){
        
        for(let i = 0; i < worldEntries.length; i++){
                worldEntries[i].isClicked = false;
        }
        for(let i = 0; i < $CharsStore.length; i++){
            $CharsStore[i].isClicked = false;
        }
    }
    let selectedGroup = "None";
    let selectedId = -1;

    import { createEventDispatcher } from 'svelte';


    const dispatch = createEventDispatcher();

    // when the handler is triggered in on:click
    // can subscribe to the on:close message in our App.svelte
    // and do what's needed
    const selectionHandler = () => dispatch('summaryElementSelected', {
			selectedGroup: selectedGroup,
            selectedElementId: selectedId.toString(),
		});

</script>

    <h2 id="summary-header">Zusammenfassung</h2>
    <div class="summary-chars summary-group">
        <h3 class="{isCharClicked ? "clicked" : ""} ">Charaktere</h3>
        <ul>
            {#each $CharsStore as charEntry}
                    <div on:click={() => clickedOnChar(charEntry.char.id)}>
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